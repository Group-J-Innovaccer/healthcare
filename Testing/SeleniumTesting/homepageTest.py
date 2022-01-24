from selenium import webdriver
import time
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.keys import Keys
import unittest
import HtmlTestRunner
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


class HomePageTest(unittest.TestCase):

    def setUp(self):
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://13.59.2.216")
        self.driver.maximize_window()
        time.sleep(4)

    def test_success(self):
        chromedriver=self.driver

        about=chromedriver.find_element(By.XPATH,'/html/body/div/div/div/div[1]/div/div/a[1]')
        about.click()
        time.sleep(3)
        

        appintment=chromedriver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[2]')
        appintment.click()
        time.sleep(3)
        chromedriver.back()
        time.sleep(2)

        doctor=chromedriver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[4]')
        doctor.click()
        time.sleep(3)
        chromedriver.back()
        time.sleep(2)

        patient=chromedriver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[3]')
        patient.click()
        time.sleep(5)
        home=chromedriver.find_element(By.XPATH,'/html/body/div/div/div/div[1]/div/a')
        home.click()
        time.sleep(2)
        self.assertEqual(chromedriver.current_url, "http://13.59.2.216/", "Home Page verified")


if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))
