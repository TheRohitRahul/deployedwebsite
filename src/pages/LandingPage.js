import React, { Component } from 'react'
import CodeOutlined from '@material-ui/icons/CodeOutlined'
import Photo from '@material-ui/icons/Photo'
import School from '@material-ui/icons/School'
import IconButton from '@material-ui/core/IconButton';

const styles = {

    largeIcon: {
      width: 60 ,
      height: 60,
    },
  
  };

export class LandingPage extends Component {
  render() {
    return (
    <React.Fragment>
      <div>
        <h1 style={{marginTop:"30vh", fontSize:"72px", display: 'flex', justifyContent: 'center'}}>Rohit Rahul</h1>
        
      </div>
      <div style={{display:"flex", justifyContent:'center'}}>
      
      <div style ={{display:'block'}}>
        <IconButton color="inherit" iconStyle={{width:'60px', height:"60px"}}>
            <a className='linkclass' href="https://github.com/rohitrahul" target="_blank">
                <CodeOutlined />
            </a>
        </IconButton>
        <h6 style={{marginTop:"5px", marginLeft:"5px"}}>Github</h6>
       </div>
        

       <div style ={{display:'block'}}>
        <IconButton color="inherit" iconStyle={styles.largeIcon}>
              <a className='linkclass' href="https://500px.com/rohitrahul" target="_blank">
                <Photo />
              </a>
              
        </IconButton>
        <h6 style={{marginTop:"5px", marginLeft:"5px"}}>500px</h6>
        </div>
        <div style ={{display:'block'}}>
        <IconButton color="inherit" iconStyle={styles.largeIcon}>
              <a className='linkclass' href="https://scholar.google.co.in/citations?user=DqF_IpoAAAAJ" target="_blank">
                <School />
            </a>
        </IconButton>
        <h6 style={{marginTop:"5px", marginLeft:"5px"}}>Google Scholar</h6>
      </div>
      </div>
    </React.Fragment>
    )
  }
}

export default LandingPage
