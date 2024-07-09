/* Reset Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
  color: #333;
}


.nav {
  top: 0;
  right: 0;
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content:center; /* Spread items evenly */
  align-items: center;
}

.nav .nav-links {
  display: flex;
  list-style: none;
  margin: 10px 0px;
  padding: 0;
}

.nav .nav-links li {
  margin-right: 20px;
}

.nav .nav-links a {
  color: #000; /* Change color to improve visibility */
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s linear;
}

.nav .nav-links a:hover {
  color: #4a98f7; /* Change color on hover */
}

.nav .nav-links a {
  color: #333; /* Change color to improve visibility */
  text-decoration: none;
  font-size: 18px;
  position: relative; /* Ensure relative positioning for pseudo-element */
}

.nav .nav-links a::after {
  content: ''; 
  position: absolute;
  left: 0;
  bottom: -2px; 
  width: 0%;
  height: 2px;
  background-color: #4a98f7; /* Color of the underline */
  /* transition: width 0.3s ease-in-out; */
}

.nav .nav-links a:hover::after {
  width: 100%;
}



.nav .navOpenBtn,
.nav .navCloseBtn {
  display: none; /* Initially hide the buttons */
}

@media screen and (max-width: 768px) {
 .nav{
  display: none;
 }
}






/* Home Section */
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
  background-color: transparent;
}

#home .left {
  flex: 1;
  padding: 0rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#home .left h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
}

#home .left h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #000;
}

#home .left span {
  color: #2196F3;
}

#home .right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home .right .photo img {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
}

/* About Section */
#about {
  padding: 4rem 1rem;
  text-align: center;
  background-color: transparent;
}

#about h1 {
  color: #2196F3;
  margin-bottom: 2rem;
}

#about .section {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

#about .section .left {
  flex: 1;
  text-align: left;
  padding-left: 14rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#about .section .left p {
  color: #000;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
}

#about .section .right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about .section .right a {
  margin-right: 20px;
}

#about .section .right a img {
  height: 70px;
  width: 70px;
}

@media screen and (max-width: 768px) {
  #about .section {
    flex-direction: column;
  }

  #about .section .left,
  #about .section .right {
    flex: 1;
    text-align: center;
    padding: 1rem;
  }

  #about .section .right a img {
    height: 50px;
    width: 50px;
  }
}

/* Skills Section */
#skills {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#skills h1 {
  margin: 25px;
}

#skills .skill-heading h1 {
  color: #2196F3;
}

#skills .icons {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 10px;
}

#skills img {
  height: 70px;
  width: 70px;
  margin: 20px;
}

@media screen and (max-width: 1200px) {
  #skills .icons {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (max-width: 992px) {
  #skills .icons {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 768px) {
  #skills .icons {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  #skills .skill-heading h1 {
    margin: 15px;
  }

  #skills img {
    height: 50px;
    width: 50px;
    margin: 10px;
  }
}

@media screen and (max-width: 576px) {
  #skills .icons {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (max-width: 400px) {
  #skills .icons {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Projects Section */
#projects {
  padding: 4rem 1rem;
  background-color: transparent;
}

#projects h1 {
  text-align: center;
  color: #2196F3;
  margin-bottom: 2rem;
}

#projects .section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 10%;
}

#projects .card {
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#projects .card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
  text-align: center;
}

#projects .card p {
  line-height: 1.6;
  color: #000;
  text-align: justify;
}

/* Connect Section */
#connect {
  padding: 4rem 1rem;
}

#connect h1 {
  text-align: center;
  color: #2196F3;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

#connect .connect-items {
  display: flex;
  justify-content: center;
  align-items: center;
}

#connect .connect-items a {
  margin: 0.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

#connect .connect-items a:hover {
  transform: scale(1.1);
}

#connect .connect-items a img {
  width: 40px;
  height: 40px;
}


@media (max-width: 1024px) {
  #connect h1 {
    font-size: 2rem;
  }

  #connect .connect-items a img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  #connect h1 {
    font-size: 1.8rem;
  }

  #connect .connect-items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  #connect .connect-items a img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 480px) {
  #connect h1 {
    font-size: 1.5rem;
  }

  #connect .connect-items a img {
    width: 30px;
    height: 30px;
  }

  #connect .connect-items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }

  #connect .connect-items a{
    display: inline-block;
  }
  #connect .connect-items img{
    display: inline-block;
  }
}

/* General Responsive Styles */
@media screen and (max-width: 768px) {
  .navbar ul {
    flex-direction: column;
    align-items: center;
  }

  .navbar ul li {
    margin-bottom: 10px;
  }

  #home {
    flex-direction: column;
    text-align: center;
  }

  #home .left, #home .right {
    width: 100%;
    padding: 0 1.5rem;
  }

  #about .section, #skills .icons, #projects .section, #connect .connect-items {
    flex-direction: column;
    text-align: center;
    padding: 0 1.5rem;
  }

  #about .section .left {
    padding-right: 0;
    margin-bottom: 2rem;
  }
}
