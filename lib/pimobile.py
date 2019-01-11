# from pwm import PWM
# from adc import ADC
from raspberrypi import PWM， ADC, Pin
import time

PERIOD = 4095
PRESCALER = 10
TIMEOUT = 0.02

motor1 = PWM(4)
motor2 = PWM(5)
motor1_direction = Pin(23)
motor2_direction = Pin(24)

all_motors = [motor1, motor2]
all_motors_direction = [motor1_direction, motor2_direction]

for pin in all_motors:
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
    if speed > 0:
        direction = 1
    else:
        direction = 0
    speed = abs(speed)
    speed = speed / 4095 * 100
    if direction > 0:
        all_motors_direction[motor].high()
        all_motors[motor].pulse_width(speed)
    else:
        
        all_motors_direction[motor].low()
        all_motors[motor].pulse_width(speed)

    # forward_speed = speed if speed > 0 else 0
    # backward_speed = -speed if speed < 0 else 0
    # forward_pins[motor].pulse_width(forward_speed)
    # backward_pins[motor].pulse_width(backward_speed)

# def test_line_1():
#     import os
#     while True:
#         os.system('clear')
#         print("Line follwer test:")
#         print("Left: %s, Right: %s"%(get_line_value("A0"), get_line_value("A1")))
#         print("")
#         print("| Left  | Right |")
#         print("| %s | %s |"%("#####" if is_black("A0") else "     ", "#####" if is_black("A1") else "     "))
#         time.sleep(0.01)

# def test_line_2():
#     import os
#     while True:
#         os.system('clear')
#         print("Line follwer test:")
#         print("Left: %s, Right: %s"%(get_line_value("A0"), get_line_value("A1")))
#         print("")
#         print("| Left  | Right |")
#         print("| %s | %s |"%("#####" if is_black("A0") else "     ", "#####" if is_black("A1") else "     "))
#         time.sleep(0.01)

# def test_line_3():
#     a = [[0, 1], [0, 0], [1, 0], [1,1]]
#     result = []
#     for x in a:
#         for y in a:
#             for z in a:
#                 result.append([x,y,z])
#     print("status: %s"%len(result))
#     for r in result:
#         print(r)



def test_all(value, dir):
    set_motor_speed(1, 0, 1)
    set_motor_speed(2, 0, 1)
    while True:
        # value = input("input speed: ")
        try:
            value = int(value)
            set_motor_speed(2, value, dir)
            set_motor_speed(1, value, dir)
        except Exception as e:
            print(e)
        # set_motor_speed(2, value)

 

# if __name__ == "__main__":
#     while True:
#         print(get_distance())
#         print('')
#         # value1 = get_line_value("A0")
#         # value2 = get_line_value("A1")
#         # print(value1)
#         # print(value2)
#         # print('')
#         time.sleep(0.8)