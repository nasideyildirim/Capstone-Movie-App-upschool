import React from 'react'

export default function Footer() {
    return (
        <footer className=" bg-dark  mt-5 py-5">
            <div className="container">
                <div className="row  pb-4">
                    <div className="col-6 pb-3">
                       
                        <ul className='list-unstyled mt-4'>
                           
                            <li className="text-muted"><p>
                                
                                LinkedIn : <a href="https://www.linkedin.com/in/naside-yildirim/" class="fab fa-linkedin"></a>
                            </p>
                            </li>
                            <li className="text-muted"><p>
                                GitHub : <a href="https://github.com/nasideyildirim" class="fa fa-github"></a>
                            </p>
                            </li>
                            <li className="text-muted"><p>
                                Medium : <a href="https://medium.com/@nasideyildirim" class="fa fa-medium"></a>
                            </p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="row">
                        </div>
          <div className="col-12 col-md">
          <div className="text-center p-5" >
   
  <div className="text-muted" to="#">© 2022 Copyright Naşide Yıldırım</div>
</div>
</div>
         
        </div>
            </div>

        </footer>
    )
}