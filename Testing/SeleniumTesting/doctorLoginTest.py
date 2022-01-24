from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import unittest
import HtmlTestRunner
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


class DoctorLoginTest(unittest.TestCase):

    def setUp(self):
       
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://13.59.2.216")
        self.driver.maximize_window()
        time.sleep(4)

    def test_success(self):
        driver=self.driver

        doctorPortal=driver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[4]')
        doctorPortal.click()

        email=driver.find_element(By.ID,"form_d_email")
        email.send_keys("pshivangi1999@gmail.com")
        email.send_keys(Keys.RETURN)

        passwd=driver.find_element(By.XPATH,'//*[@id="form_d_pass"]')
        passwd.send_keys("admin@123")
        passwd.send_keys(Keys.RETURN)
        driver.execute_script("window.scrollTo(0,document.body.scrollHeight);")
        time.sleep(2)



        login=driver.find_element(By.XPATH,'//*[@id="contact-form"]/div/div[3]/center/div/div/button')
        login.click()
        time.sleep(5)
        self.assertEqual(driver.current_url, "http://13.59.2.216/doctor_dashboard", "Login Successful")

    def test_fail_password(self):
        driver=self.driver

        doctorPortal=driver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[4]')
        doctorPortal.click()

        email=driver.find_element(By.ID,"form_d_email")
        email.send_keys("pshivangi1999@gmail.com")
        email.send_keys(Keys.RETURN)

        passwd=driver.find_element(By.XPATH,'//*[@id="form_d_pass"]')
        passwd.send_keys("admin")
        passwd.send_keys(Keys.RETURN)
        driver.execute_script("window.scrollTo(0,document.body.scrollHeight);")
        time.sleep(2)

        login=driver.find_element(By.XPATH,'//*[@id="contact-form"]/div/div[3]/center/div/div/button')
        login.click()
        time.sleep(5)
        self.assertEqual(driver.current_url, "http://13.59.2.216/doctor_dashboard", "Login Failed")



if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))