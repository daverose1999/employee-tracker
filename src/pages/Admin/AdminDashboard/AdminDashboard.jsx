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

import employees from '../../../assets/employee.svg'
import working from '../../../assets/working.svg'
import hourglass from '../../../assets/hourglass.svg'
import calendar from '../../../assets/calendar.svg'

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
    padding: 20px 20px 20px 35px;
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
    height: 35px;
    margin: 0 0 0 50px;


    input{
        width: 100%;
        height: 100%;
        background-color: #f4f7f9;
        padding: 0px 50px; 
        font-size: 12px;
        outline: none;
        border: none;
    }

    button{
        font-size: 12px;
        width: 100px;
        height: 100%;
        outline: none;
        border: none;
        background-color: #438ffe;
        color: #fff;
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
        width: 40px;
        height: 40px;
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
    padding: 30px;
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
    width: 100%;
`

const Cards = styled.div
`
   display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`
const Card = styled.div
`
    padding: 20px;
    background-color: #fff;

    .top{
        padding: 10px;
        width: fit-content;

        img{
            width: 24px;
        }
    }

    .middle{
        margin: 15px 0;
        h2{
            font-size: 16px;
            font-weight: 300;
            color: #b3b8c5;
        }

        p{
            font-size: 28px;
            color: #28215b;
        }
        
    }

    .bottom{
        border-top: 1px solid #dcdcdc;
    }

     .color1{
            background-color: #559afe;
        }

        .color2{
            background-color: #f4f9f4;
        }

        .color3{
            background-color: #edf4ff;
        } 
        
        .color4{
            background-color: #f3f9f9;
        }
      


`
const Main = styled.div
`
    padding: 40px;
    width: 100%;

    h1{
        font-weight: 600;
        font-size: 22px;
        margin-bottom: 20px;
        color: #28215b;
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
                        <Card>
                            <div className='top color1'>
                                <img  src={employees} alt=''/>
                            </div>
                            <div className='middle'>
                                <h2>Total Employees</h2>
                                <p>11</p>
                            </div>
                            <div className='bottom'>+ Add Employee</div>
                        </Card>
                        <Card>
                             <div className='top color2'>
                                <img src={working} alt=''/>
                            </div>
                            <div className='middle'>
                                <h2>Employees Working Today</h2>
                                <p>12</p>
                            </div>
                            <div className='bottom'>
                                <p>Remaining: 1</p>
                            </div>
                        </Card> 
                        <Card>
                              <div className='top color3'>
                                <img src={hourglass} alt=''/>
                            </div>
                            <div className='middle'>
                                <h2>Employees Clocked Out</h2>
                                <p>10</p>
                            </div>
                            <div className='bottom'>
                                <p>Remaining: 1</p>
                            </div>
                        </Card> 
                        <Card>
                            <div className='top color4'>
                                <img src={calendar} alt=''/>
                            </div>
                            <div className='middle'>
                                <h2> Days Off Request</h2>
                                <p>10</p>
                            </div>
                            <div className='bottom'>
                                <p>Remaining: 1</p>
                            </div>
                        </Card> 
                    </Cards>
                </Main>
           </View>
      </Container>
  )
}

export default AdminDashboard