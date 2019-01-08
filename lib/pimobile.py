# from pwm import PWM
# from adc import ADC
from raspberrypi import PWM， ADC, Pin
import time

PERIOD = 4095
PRESCALER = 10
TIMEOUT = 0.02

forward_pins = [PWM(6), PWM(4)]
backward_pins = [PWM(7), PWM(5)]
all_pins = forward_pins + backward_pins

for pin in all_pins:
    pin.period(PERIOD)
    pin.prescaler(PRESCALER)


def get_distance(trig=17, echo=18):
    trig = Pin(trig)
    echo = Pin(echo)
    trig.low()
    time.sleep(0.01)
    trig.high()
    time.sleep(0.00001)
    trig.low()
    pulse_end = 0
    timeout_start = time.time()
    while echo.value()==0:
        pluse_start = time.time()
        if pluse_start - timeout_start > TIMEOUT:
            return -1
    while echo.value()==1:
        pulse_end = time.time()
        if pulse_end - timeout_start > TIMEOUT:
            return -1

    during = pulse_end - pluse_start
    return during * 340 /2 *100

def get_line_value(chn):
    chn = ADC(chn)
    return chn.read()

def is_black(chn, references=300):
    if get_line_value(chn) < references:
        return True
    else:
        return False

def set_motor_speed(motor, speed):
    motor -= 1
    forward_speed = speed if speed > 0 else 0
    backward_speed = -speed if speed < 0 else 0
    forward_pins[motor].pulse_width(forward_speed)
    backward_pins[motor].pulse_width(backward_speed)

def test_line_1():
    import os
    while True:
        os.system('clear')
        print("Line follwer test:")
        print("Left: %s, Right: %s"%(get_line_value("A0"), get_line_value("A1")))
        print("")
        print("| Left  | Right |")
        print("| %s | %s |"%("#####" if is_black("A0") else "     ", "#####" if is_black("A1") else "     "))
        time.sleep(0.01)

def test_line_2():
    import os
    while True:
        os.system('clear')
        print("Line follwer test:")
        print("Left: %s, Right: %s"%(get_line_value("A0"), get_line_value("A1")))
        print("")
        print("| Left  | Right |")
        print("| %s | %s |"%("#####" if is_black("A0") else "     ", "#####" if is_black("A1") else "     "))
        time.sleep(0.01)

def test_line_3():
    a = [[0, 1], [0, 0], [1, 0], [1,1]]
    result = []
    for x in a:
        for y in a:
            for z in a:
                result.append([x,y,z])
    print("status: %s"%len(result))
    for r in result:
        print(r)


def test_motor():
    set_motor_speed(1, -4095)
    set_motor_speed(2, 4095)

    

if __name__ == "__main__":
    test_motor()

# class Motor(object):
#     PERIOD = 4095
#     PRESCALER = 10

#     def __init__(self):
#         self.motor1_foreward = PWM(6)
#         self.motor1_reverse = PWM(7)
#         self.motor2_foreward = PWM(4)
#         self.motor2_reverse = PWM(5)

#         self.motor1_foreward.PERIOD(self.PERIOD)
#         self.motor1_foreward.PRESCALER(self.PRESCALER)

#         self.motor1_reverse.PERIOD(self.PERIOD)
#         self.motor1_reverse.PRESCALER(self.PRESCALER)

#         self.motor2_foreward.PERIOD(self.PERIOD)
#         self.motor2_foreward.PRESCALER(self.PRESCALER)

#         self.motor2_reverse.PERIOD(self.PERIOD)
#         self.motor2_reverse.PRESCALER(self.PRESCALER)
#         # for i range(0, 3):
#         #     self.p_in.PERIOD(self.PERIOD)
                
#         #         self.p_out = PWM(self.PORT[device][chn][0])
#         #         self.p_in = PWM(self.PORT[device][chn][1])
#         #         self.p_in.PERIOD(self.PERIOD)
#         #         self.p_in.PRESCALER(self.PRESCALER)
#         #         self.p_out.PERIOD(self.PERIOD)
#         #         self.p_out.PRESCALER(self.PRESCALER)

 
#     def foreward(self):
#         self.motor1_foreward.pulse_width(2048)
#         self.motor1_reverse.pulse_width(0)
#         self.motor2_foreward.pulse_width(2048)
#         self.motor2_reverse.pulse_width(0)

    
#     def reverse(self):
#         self.motor1_reverse.pulse_width(2048)
#         self.motor1_foreward.pulse_width(0)
#         self.motor2_reverse.pulse_width(2048)
#         self.motor2_foreward.pulse_width(0)

#     def turn_left(self):
#         self.motor1_foreward.pulse_width(1024)
#         self.motor1_reverse.pulse_width(0)
#         self.motor2_foreward.pulse_width(2048)
#         self.motor2_reverse.pulse_width(0)

#     def turn_right(self):
#         self.motor1_foreward.pulse_width(2048)
#         self.motor1_reverse.pulse_width(0)
#         self.motor2_foreward.pulse_width(1024)
#         self.motor2_reverse.pulse_width(0)

#     def test1(self, value):

#         self.motor1_foreward.pulse_width(value)
#         self.motor1_reverse.pulse_width(0)

# def test():
#     motor = Motor()
#         # print("forward")
#     while True:
#         print("forward")
#         # motor.test1(2048)
#         motor.test1(4095)
#         time.sleep(1)
        
#         # motor.test1(4095)
#         motor.test1(2048)
#         time.sleep(1)
#         # time.sleep(1)
#         # print("reverse")
#         # motor.reverse()
#         # time.sleep(1)
#         # print("turn_left")
#         # motor.turn_left()
#         # time.sleep(1)
#         # print("turn_right")
#         # motor.turn_right()
#         # time.sleep(1)
#         # print("reverse")
#         # motor.reverse()
#         # time.sleep(1)
        
# if __name__ == "__main__":
#     test()