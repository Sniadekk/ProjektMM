     
      var iconSelect;
      
              window.onload = function(){
      
                  iconSelect = new IconSelect("materials", 
                      {'selectedIconWidth':120,
                      'selectedIconHeight':120,
                      'selectedBoxPadding':0,
                      'iconsWidth':100,
                      'iconsHeight':100,
                      'boxIconSpace':1,
                      'vectoralIconNumber':2,
                      'horizontalIconNumber':3});
      
                  var icons = [];
                  icons.push({'iconFilePath':'materialy/1.jpg', 'iconValue':'1'});
                  icons.push({'iconFilePath':'materialy/2.jpg', 'iconValue':'2'});
                  icons.push({'iconFilePath':'materialy/3.jpg', 'iconValue':'3'});
                  icons.push({'iconFilePath':'materialy/4.jpg', 'iconValue':'4'});
                  icons.push({'iconFilePath':'materialy/5.jpg', 'iconValue':'5'});
                  
                  iconSelect.refresh(icons);
      
              };
            