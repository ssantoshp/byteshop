import './App.css';
import Product from "./Product";
import './Product.css';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">

      
      <div className="app__videos">
       <Product ticker="Best" price_team = "1000" price = "1100" seller="Apple" title="New Apple iPhone 12 (64GB, Green)  
[Locked]" image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"/>
  
       <Product price_team="208" price="244"title="Jordan 11 Retro Jubilee 25th Anniversary
" seller="Nike" image="https://sneakerfits.com/wp-content/uploads/2020/11/air-jordan-11-jubilee-on-foot-look.jpg"/>
        
       <Product price="39" 
       price_team="29" 
       seller="RhinoShield" 
       title="NASA - Verso RhinoShield Cosmos Series" 
       image="https://pbs.twimg.com/ext_tw_video_thumb/1236843797536899073/pu/img/wGuun33CygJ5er-R.jpg"/>

<Product price="39,99" 
       price_team="33,99" 
       seller="Pom'Potes" 
       title="Compote de Pomme - Materne - 48 Gourdes" 
       image="https://media1.coffee-webstore.com/10753-thickbox_default/compote-de-pomme-pom-potes-materne-48-gourdes.jpg"/>

<Product price="13,49" 
       price_team="9,99" 
       seller="Shein" 
       title="SHEIN Sweat-shirt à motif lettre" 
       image="https://img.ltwebstatic.com/images3_pi/2020/07/28/1595916756b27abcd65332412f48a2306dd6c98ce8_thumbnail_600x.webp"/>
            
<Product price="19,99" 
       price_team="16" 
       seller="Xiaomi" 
       title="Redmi Earbuds S" 
       image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600853492.53164212.png?width=420&height=420"/>
            
<Product price="2,50" 
       price_team="1,50" 
       seller="Zalando" 
       title="Bonnet avec broderie nuage chinoise" 
       image="https://img.ltwebstatic.com/images3_pi/2020/09/10/15997071645902c14cbb7e158287abf62fd56f1feb_thumbnail_600x.webp"/>

            
<Product price="3,50" 
       price_team="1,20" 
       seller="Yiwu Zono Arts&Crafts Co., Ltd." 
       title="Kawaii Pikachu soft stuffed Pokemon plush toys " 
       image="https://sc04.alicdn.com/kf/Hfe3be51c203b4cf5a2d5ba140112e6d4j.jpg"/>
                
     </div>
    </div>
    </Router>
  );
}

export default App;
