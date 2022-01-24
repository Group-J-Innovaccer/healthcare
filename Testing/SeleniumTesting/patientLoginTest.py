from selenium import webdriver
import time
import unittest
import HtmlTestRunner 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options



class PatientLoginTest(unittest.TestCase):

    def setUp(self):
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://13.59.2.216")
        self.driver.maximize_window()
        time.sleep(4)
        
    def test_success(self):
        driver=self.driver

        patient_portal = driver.find_element(By.XPATH,"/html/body/div/div/div/div[1]/div/div/a[3]")
        patient_portal.click()
        time.sleep(2)

        patient_id = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div/div/input")
        patient_id.send_keys("1")

        patient_sk = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[2]/div/div/input")
        patient_sk.send_keys("1234")

        patient_btn = driver.find_element(By.XPATH,'//*[@id="contact-form"]/div/div[3]/center/div/div/button[1]')
        patient_btn.click()

        time.sleep(5)

        self.assertEqual(driver.current_url, "http://13.59.2.216/allprescription", "Login Successful")
        driver.close()


    def test_fail_credentials(self):
        driver=self.driver

        patient_portal = driver.find_element(By.XPATH,"/html/body/div/div/div/div[1]/div/div/a[3]")
        patient_portal.click()
        time.sleep(2)

        patient_id = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div/div/input")
        patient_id.send_keys("1")

        patient_sk = driver.find_element(By.XPATH,"/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[2]/div/div/input")
        patient_sk.send_keys("12")
        driver.execute_script("window.scrollTo(0,0);")
        time.sleep(2)

        patient_btn = driver.find_element(By.XPATH,'//*[@id="contact-form"]/div/div[3]/center/div/div/button[1]')
        patient_btn.click()

        time.sleep(5)
    
        self.assertEqual(driver.current_url, "http://13.59.2.216/allprescription", "Login Failed")
        driver.close()


if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))