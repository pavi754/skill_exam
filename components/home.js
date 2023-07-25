const Home = () => {
    return ( 
        <> 
        <body>
        
    <nav class="navbar navbar-expand-lg  bg-warning">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Food</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
              <button class="btn btn-outline-success" ><a href="./login.html">login</a></button>
            </form>
          </div>
        </div>
      </nav>
      <br></br>
  
       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://th.bing.com/th/id/R.c971a5c8296935d8ab32b48dc8e3a915?rik=Cr9LZUFT6SAh1g&riu=http%3a%2f%2fwww.frci.org.uk%2fimages%2fcustom%2fuploads%2f208%2fimages%2fcomputer-course-banners-top.jpg&ehk=zBcMoE84ZfCjVcj267%2fQidmv999RpgntaEsQo4ZnO%2b4%3d&risl=&pid=ImgRaw&r=0" height="600" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src="https://www.westgatech.edu/wp-content/uploads/2018/09/computer-training.jpg" height="600" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
                <img src="https://www.westgatech.edu/wp-content/uploads/2018/09/computer-training.jpg" height="600" class="d-block w-100" alt="..."></img>
              </div>
            </div>
          </div>
  
      <br></br>
  
      <div class="container">
       
  
  
  
        <div class="row">
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                    <img src="https://th.bing.com/th/id/OIP.bfg9UXXeY_D61zT2d9-agAHaE8?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">C programming</h5>
                      
                      <a href="#" class="btn btn-primary">book now</a>
                    </div>
                  </div>
            </div>
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                    <img src="https://tse2.mm.bing.net/th?id=OIP.146KT0gacYdSQBkPBLYCSAHaFU&pid=ImgDet&w=696&h=500&rs=1" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">python programming</h5>
                      
                      <a href="#" class="btn btn-primary">book now</a>
                    </div>
                  </div>
            </div>
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                    <img src="https://tse4.mm.bing.net/th?id=OIP.LHXm6TqqcaWNtDIVm6ODZwHaEK&pid=ImgDet&rs=1" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">c++ programming</h5>
                      
                      <a href="#" class="btn btn-primary">book now</a>
                    </div>
                  </div>
            </div>
            <div class=" col-md-6 col-lg-6 col-sm-12">
                <div class="card" >
                    <img src="https://th.bing.com/th/id/OIP.4jw9ULBKY-QHRBdfd2bhOgHaFA?pid=ImgDet&rs=1" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">Fresh juice</h5>
                      
                      <a href="#" class="btn btn-primary">order now</a>
                    </div>
                  </div>
            </div>
        </div>
        
      </div>
      
    
  
      </body>
        </>
    );
  }
  
  export default Home;