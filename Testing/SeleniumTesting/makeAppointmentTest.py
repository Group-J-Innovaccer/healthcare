from selenium import webdriver
import time
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.keys import Keys
import unittest
import HtmlTestRunner
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


class MakeAppointmentTest(unittest.TestCase):

    def setUp(self):
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://13.59.2.216")
        self.driver.maximize_window()
        time.sleep(4)

    def test_success(self):
        chromedriver=self.driver

        appointment=chromedriver.find_element(By.XPATH,'//*[@id="root"]/div/div/div[1]/div/div/a[2]')
        appointment.click()
        time.sleep(5)

        #Appointment Part
        drop=Select(chromedriver.find_element(By.XPATH,'//*[@id="form_doctor"]'))
        drop.select_by_index(3)
        time.sleep(5)

        date=chromedriver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[1]/div[2]/div/input')
        date.send_keys('29/01/2022')
        time.sleep(5)
        date.send_keys(Keys.RETURN)


        firstname=chromedriver.find_element(By.XPATH,'//*[@id="form_p_fname"]')
        firstname.send_keys('Rachna')
        time.sleep(5)

        lastname=chromedriver.find_element(By.XPATH,'//*[@id="form_p_lname"]')
        lastname.send_keys('kumari')
        time.sleep(5)
        appointmentTime=Select(chromedriver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[3]/div[1]/div/select'))
        time.sleep(2)
        appointmentTime.select_by_index(1)
        time.sleep(5)

        phone=chromedriver.find_element(By.XPATH,'//*[@id="form_p_mob_no"]')
        phone.send_keys('76467')
        time.sleep(5)


        issue=chromedriver.find_element(By.XPATH,'//*[@id="form_p_issue"]')
        issue.send_keys("fever and back pain")
        time.sleep(5)

        checkbox=chromedriver.find_element(By.XPATH,'//*[@id="form_exist"]')
        checkbox.click()
        time.sleep(5)

        chromedriver.execute_script("window.scrollTo(0,document.body.scrollHeight);")
        time.sleep(2)
        makeappointment=chromedriver.find_element(By.XPATH,'/html/body/div/div/div/div[2]/div[2]/div/div/div/div/form/div/div[5]/center/div/div/button')
        makeappointment.click()
        time.sleep(2)
        chromedriver.switch_to.alert.accept()
        time.sleep(2)
        self.assertEqual(chromedriver.current_url, "http://13.59.2.216/", "Appointment Created Successfully")

    


if __name__ == "__main__":
    unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))