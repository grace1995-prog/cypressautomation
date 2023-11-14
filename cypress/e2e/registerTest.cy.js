import {loginPage} from'../pages/signupPage.cy'
const loginObj = new loginPage()
import registerData from'../fixtures/registerData.json'

describe('test automation', () => {

    it('passes', () => {
        loginObj.openURL()
        loginObj.enteremail(registerData.username)
        loginObj.enterpassword(registerData.password)
        loginObj.clickbutton()

        


      
    })
  })