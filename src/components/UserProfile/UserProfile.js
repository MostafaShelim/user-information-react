import './UserProfile.css';
const UserProfile = (props) => { 
    const {name, email, phone, salary, address, img} = props.user;
    return (
        <div className="user-profile">
            <img style = {{borderRadius: '50%', width: '100px', height:'100px'}} src={img} alt=""/>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Salary: {salary}</p>
            <button onClick={() => props.handleUserClick(props.user)}>Add User</button>
        </div>
    );
};

export default UserProfile;