import smbus, math
from basic import _Basic_class

class PWM(_Basic_class):
    REG_PSC = 0x28
    REG_ARR = 0x2A
    ADDR = 0x14

    PRECISION = 4095
    CLOCK = 72000000

    def __init__(self, channel):
        super().__init__()
        if isinstance(channel, str):
            if channel.startswith("P"):
                channel = int(channel[1:])
            else:
                raise ValueError("PWM channel should be between [P1, P8], not {0}".format(channel))
        self.channel = channel + 0x20
        self.bus = smbus.SMBus(1)
        self._pulse_width = 0
        self._freq = 50
        self.freq(50)


        

    def i2c_write(self, reg, value):
        value_h = value >> 8
        value_l = value & 0xff
        # print("reg:%d" % reg)
        # print(value_h)
        # print(value_l)
        self.bus.write_byte(self.ADDR, reg)
        self.bus.write_byte(self.ADDR, value_h)
        self.bus.write_byte(self.ADDR, value_l)
        self._debug("i2c write: [0x%02X, 0x%02X, 0x%02X, 0x%02X]"%(self.ADDR, reg, value_h, value_l))

    def freq(self, *freq):
        if len(freq) == 0:
            return self._freq
        else:
            self._freq = freq[0]
            result_ap = []
            result_acy = []
            st = int(math.sqrt(self.CLOCK/self._freq))
            st -= 5
            if st <= 0:
                st = 1
            for psc in range(st,st+10):
                arr = int(self.CLOCK/self._freq/psc)
                result_ap.append([psc, arr])
                result_acy.append(abs(self._freq-self.CLOCK/psc/arr))
            i = result_acy.index(min(result_acy))
            psc = result_ap[i][0]
            print("psc:%s" % psc)
            arr = result_ap[i][1]
            print(arr)
            self._debug("prescaler: %s, period: %s"%(psc, arr))
            self.prescaler(psc)
            self.period(arr)

    def prescaler(self, *prescaler):
        if len(prescaler) == 0:
            return self._prescaler
        else:
            self._prescaler = prescaler[0]
            self._debug("Set prescaler to: %s"%self._prescaler)
            print(self._prescaler)
            self.i2c_write(self.REG_PSC, self._prescaler)

    def period(self, *arr):
        if len(arr) == 0:
            return self._arr
        else:
            self._arr = arr[0]
            self._debug("Set arr to: %s"%self._arr)
            self.i2c_write(self.REG_ARR, self._arr)

    def pulse_width(self, *pulse_width):
        if len(pulse_width) == 0:
            return self._pulse_width
        else:
            self._pulse_width = pulse_width[0]
            print("pulse_width:%d" % self._pulse_width)
            print("_arr:%d" % self._arr)
            CCR = int(self._pulse_width/self.PRECISION * self._arr)
            print("CCR: %s"%CCR)
            self.i2c_write(self.channel, CCR)

    def Servo_angle(self, angle):
        self.angle = angle
        self.prescaler(351)
        self.period(4095)
        _period = 1000000/int(72000000.0/self.prescaler/self.period)
        pw = int(self.angle / 180.0 * 2000 + 500)
        value = int(pw / _period * 4095.0)
        self.pulse_width(value)
        
# def test():
#     import time
#     p = PWM(0)
#     # p.debug = 'debug'
#     p.period(1000)
#     p.prescaler(10)
#     # p.pulse_width(2048)
#     while True:
#         for i in range(0, 4095, 10):
#             p.pulse_width(i)
#             print(i)
#             time.sleep(1/4095)
#         time.sleep(1)
#         for i in range(4095, 0, -10):
#             p.pulse_width(i)
#             print(i)
#             time.sleep(1/4095)
#         time.sleep(1)
def test(): 
    pwm = PWM(2)
    print("next1")
    pwm.period(1000)
    print("next2")
    pwm.prescaler(10)
    print("star pre")
    pwm.pulse_width(2048)
    pwm.pulse_width(4095)
    pwm.pulse_width(777)
    pwm.pulse_width(1777)
    pwm.pulse_width(100)
    pwm.pulse_width(66)
    pwm.pulse_width(1777)
    pwm.pulse_width(777)
    pwm.pulse_width(68)
    pwm.pulse_width(67)
    print("start success")
    while True:
        for i in range(0, 100):
            pwm.pulse_width(i)
            print("i:%d" %i)
        
    



if __name__ == '__main__':
    test()