import { Account } from './account';
export /**
 * PersonalInfo
 */
class PersonalInfo {
    constructor() {
        
    }
    title: string = "Personal Info";
	icon: string = ""; 
    firstName: string;
    lastName: string;         
    fullName: string = "";
    gender: string;
    maritalStatus: string;
    dob: string = "";
    mobile: string = "";
    email: string;        
    nationality: string = "";
    address: string = "";
    city: string = "";
    country: string = "";
    profile: string = "";
    image: string = "";
    accountList: Account[]=[];
}

