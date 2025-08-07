function FullLayout(props) {
  return (
  
      <div class="page page-center" style={{ 
        width: "100%",
        height: "100vh",
       }}>{props.children}</div>
    
  );
}

export default FullLayout;
