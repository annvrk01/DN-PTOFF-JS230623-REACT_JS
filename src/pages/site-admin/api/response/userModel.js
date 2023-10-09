class UserModel {
  constructor(id, avatar, gender, firstName, lastName, email, address, phone, dayOfBirth) {
    this.id = id;
    this.avatar = avatar;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.dayOfBirth = dayOfBirth;
  }
}

export default UserModel;
