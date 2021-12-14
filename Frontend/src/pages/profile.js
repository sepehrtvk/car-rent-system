const Profile = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  return (
    <div
      className="container-fluid bg-primary bg-gradient p-5"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-6 me-auto text-center">
          <h3 className="text-white border-bottom pb-3 mt-5">حساب کاربری من</h3>
          <ul className="list-group p-5 text-end">
            <li className="list-group-item fw-bold">
              نام :<span className="fw-normal me-2">{name}</span>
            </li>
            <li className="list-group-item fw-bold">
              ایمیل :<span className="fw-normal me-2">{email}</span>
            </li>
            <li className="list-group-item fw-bold">
              نقش :<span className="fw-normal me-2">{role}</span>
            </li>
          </ul>
        </div>
        <div className="col-12 me-auto text-center">
            <button className="btn btn-light" > پشتیبانی آنلاین</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
