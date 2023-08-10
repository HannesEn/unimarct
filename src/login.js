export function Login({}) {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };
  return (
    <div>
      <button onClick={google}>Google login</button>
    </div>
  );
}
