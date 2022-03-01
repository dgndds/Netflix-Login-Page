from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

PATH = "C:\Program Files (x86)\chromedriver.exe"

options = webdriver.ChromeOptions()
options.add_argument('ignore-certificate-errors')
driver = webdriver.Chrome(PATH,chrome_options=options)
driver.get("https://localhost:3000")

loginInput = driver.find_element(By.ID,"userLogin")
passInput = driver.find_element(By.ID,"userPass")
outerDiv = driver.find_element(By.ID,"outerDiv")
fbLogin = driver.find_element(By.ID,"fbLogin")
fbSuccess = driver.find_element(By.ID,"fbSuccess")
submitButton = driver.find_element(By.ID,"submitButton")

loginInput.send_keys("abcdf")
passInput.send_keys("abcdf")

unfocusInputs = ActionChains(driver)
unfocusInputs.move_to_element(outerDiv).click().perform()

#======================== Test Case 1 ========================
print("====== Test Case 1 ======")
if len(driver.find_elements(By.ID, "emailError"))>0:
    print("Email Verification Test: Successful")
else:
    print("Email Verification Test: Failed")

if len(driver.find_elements(By.ID, "passError"))>0:
    print("Email Verification Test: Successful")
else:
    print("Password Verification Test: Failed")

print()

time.sleep(5)

#======================== Test Case 2 ========================
print("====== Test Case 2=====")
loginInput.clear()
passInput.clear()
loginInput.send_keys("eaktas2@gmail.com")
passInput.send_keys("123123")
login = ActionChains(driver)
login.move_to_element(submitButton).click().perform()

if len(driver.find_elements(By.ID, "loginSuccess"))>0:
    print("Login Test: Successful")
else:
    print("Login Test: Failed")

time.sleep(5)

#======================== Test Case 3 ========================
print("====== Test Case 3=====")
loginFb = ActionChains(driver)
loginFb.move_to_element(fbLogin).click().perform()

if len(driver.find_elements(By.ID, "fbSuccess"))>0:
    print("Login Test: Successful")
else:
    print("Login Test: Failed")


#======================== Test Case 4 ========================
print("====== Test Case 4 =====")
loginInput.clear()
passInput.clear()
loginInput.send_keys("ab")
passInput.send_keys("12")
login = ActionChains(driver)
login.move_to_element(submitButton).click().perform()

if len(driver.find_elements(By.ID, "loginSuccess"))>0:
    print("Login Test: Successful")
else:
    print("Login Test: Failed")

#======================== Test Case 5 ========================
print("====== Test Case 5 =====")
login.move_to_element(submitButton).click().perform()

if len(driver.find_elements(By.ID, "loginSuccess"))>0:
    print("Login Test: Successful")
else:
    print("Login Test: Failed")

time.sleep(5)


time.sleep(5)




driver.close()
