//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaPlusCircle } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiHelpCircle } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./header.css";
// import getFile from "../../functions/saveText.js";


const currentPages = ["test"];
//currentPages will have to be imported from data folder, each file will be a page.

const listPages = currentPages.map((name, i) =>
  <MenuItem>{name + i}</MenuItem>
); //maps current pages that already exist to the navbar.

const Item = () => {
  return <MenuItem>Test</MenuItem>
}


export class Header extends React.Component {
  state = { // Keeps track of pages that are added when user clicks New Page button.
    pages: []
  };

  addPage = () => {//this function will also have to somehow create a new file to store the contents of the page.
    this.setState({
      pages: [...this.state.pages, <Item />]
    })
    // getFile.getFile();
  }

  //This function opens a new window when the help button is pushed
  popUp = () => {
    window.open('https://cdesantiago94.gitbook.io/arithmescript/','Arithmescript Syntax', 'width=1150, height=600')
  }

  render() {
    return (
      <>
        <div id="header">
            {/* collapsed props to change menu size using menucollapse state */}
          <ProSidebar>
            <SidebarHeader>
            <div className="logotext">
              </div>

            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="round">
                <MenuItem active={true} icon={<FiHome />}>
                  Home
                </MenuItem>
                {listPages}
                {this.state.pages}
                <MenuItem
                icon={<FaPlusCircle />} onClick={this.addPage}>New Page</MenuItem>

              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<BiHelpCircle />} onClick={this.popUp}>Help</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </>
    );
  }
}
