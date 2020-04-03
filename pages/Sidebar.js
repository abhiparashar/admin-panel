import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Microservices
        </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="http://13.235.229.191:3001/docs" >MS_KYC</DropdownItem>
                <DropdownItem href="http://13.235.229.191:3000/docs" >MS_TOKEN</DropdownItem>
                <DropdownItem href="http://13.235.229.191:3006/docs" >MS_PROFILE</DropdownItem>
                <DropdownItem href="http://13.235.229.191:3004/docs" >MS_WHITELIST</DropdownItem>
                <DropdownItem href="http://13.235.229.191:3007/docs" >MS_MESSAGING</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default Example;
