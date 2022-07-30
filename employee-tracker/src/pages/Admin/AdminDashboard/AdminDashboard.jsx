import React from 'react'
import styled from '@emotion/styled'
import employeeCard from '../../../assets/employeeCard.svg'
import search from '../../../assets/search.svg'
import message from '../../../assets/message.svg'
import notification from '../../../assets/notification.svg'
import profile from '../../../assets/photo.jpeg'
import dropdown from '../../../assets/dropdown.svg'
import dashboard from '../../../assets/dashboard.svg'
import users from '../../../assets/users.svg'
import report from '../../../assets/report.svg'
import setting from '../../../assets/setting.svg'
import help from '../../../assets/help.svg'
import logout from '../../../assets/logout.svg'

const Container = styled.div
`
    position: relative;
    background-color: #f8f8f8;
`

const TopBar = styled.div
`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex; 
    justify-content: space-between; 
    padding: 20px 50px 20px 35px;
    border-bottom: 1px solid #f7f7f7;
    background-color: #fff;
`

const Logo = styled.figure
`
    width: 30px;
    height: 30px;

    img{
        width: 100%;
        height: 100%;
    }
`

const Flex = styled.div
`
    display: flex;
    align-items: center;
    gap: 0px 20px;
`

const Search = styled.div
`
    position: relative;
    display: flex;
    width: 465px;
    height: 40px;
    margin: 0 0 0 50px;

    input{
        width: 100%;
        height: 100%;
        background-color: #f4f7f9;
        padding: 0px 50px; 
        outline: none;
        border: none;
    }

    button{
        width: 100px;
        height: 100%;
        outline: none;
        border: none;
        background-color: #438ffe;
        color: #fff;
        font-size: 14px;
    }

    img{
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        width: 18px;
    }
`
const Profile = styled.div
`
    display: flex;
    align-items: center;

    .picture{
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
    }
`

const SideBar = styled.div
`
    position: sticky;
    display: flex;
    justify-content: space-between;
    flex-direction: column; 
    height: calc(100vh - 86px);
    background-color: #fff;
    padding: 40px;
    width: fit-content;
`

const Column = styled.div
`
    display: flex;
    flex-direction: column; 
    width: 20px;
    gap: 60px;
`
const View = styled.div
`
    display: flex;
`

const Cards = styled.div
`
`
const Card = styled.div
`
`
const Main = styled.div
`
    padding: 40px;

    h1{
        font-weight: 400;
    }
`

const AdminDashboard = () => {
    return (
      <Container>
            <TopBar>
                <Flex>
                    <Logo>
                        <img src={employeeCard} alt=''/>
                    </Logo>
                    <Search>
                        <img src={search} alt=''/>
                        <input placeholder='Search for employees' type='text' />
                        <button>Search</button>
                    </Search> 
                </Flex>
                <Flex>
                    <img src={message} alt='' />
                    <img src={notification} alt='' />
                    <Profile>
                        <img class='picture' src={profile} alt='' />
                        <img class='dropdown' src={dropdown} alt=''/>
                    </Profile>
                </Flex>
            </TopBar>
            <View>
                <SideBar>
                    <Column>
                        <img src={dashboard} alt='' />
                        <img src={users} alt='' />
                        <img src={report} alt='' />
                        <img src={setting} alt='' />
                    </Column>
                    <Column>
                        <img src={help} alt='' />
                        <img src={logout} alt='' />
                    </Column>
                </SideBar>
                <Main>
                    <h1>Dashboard</h1>
                    <Cards>
                        <Card>Total Employees
                            11
                            Add Employee
                        </Card>
                        <Card>Employees Working Today
                            12
                        Remaining: 1
                        </Card> 
                        <Card>Employees Clocked Out
                        10</Card> 
                        <Card>Sick days Request</Card> 
                    </Cards>
                </Main>
           </View>
      </Container>
  )
}

export default AdminDashboard