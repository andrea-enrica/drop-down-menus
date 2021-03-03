import {navBar} from './navBar.js';

var dropDownMenu = (function() {
    navBar();
    var clickBttn = () => {
        document.getElementById('click').addEventListener('click', () => {
            let hover1 = document.getElementById('hover1');
            let hover2 = document.getElementById('hover2');
            let hover3 = document.getElementById('hover3');
            if (hover1.className == "itemOff" && hover2.className && hover3.className) {
                hover1.className = "itemOn";
                hover2.className = "itemOn";
                hover3.className = "itemOn";
            } else {
                hover1.className = "itemOff";
                hover2.className = "itemOff";
                hover3.className = "itemOff";
            }
        });
    }

    var hover1menu = () => {
        document.getElementById('hover2').addEventListener('mouseover', () => {
            let dropdown1 = document.getElementById('dropdown1');
            clearTimeout(setTimeout);
            if(dropdown1.className == "itemOff") {
                dropdown1.classList = "itemOn";  
            }
        });

        document.getElementById('hover2').addEventListener('mouseleave', (event) => {
            setTimeout( function(){
                let dropdown1 = document.getElementById('dropdown1');
                if(dropdown1.className == "itemOn") {
                    dropdown1.classList = "itemOff";  
                }
            },1000);
        });
    }

    var hover2menu = () => {
        document.getElementById('hover3').addEventListener('mouseover', () => {
            let dropdown2 = document.getElementById('dropdown2');
            clearTimeout(setTimeout);
            if(dropdown2.className == "itemOff") {
                dropdown2.classList = "itemOn";
            } 
        }); 

        document.getElementById('hover3').addEventListener('mouseleave', (event) => {
            setTimeout( function(){
                let dropdown2 = document.getElementById('dropdown2');
                if(dropdown2.className == "itemOn") {
                    dropdown2.classList = "itemOff";
                }
            },1000);
        });
    }
    
    return {clickBttn, hover1menu, hover2menu};
})();

dropDownMenu.clickBttn();
dropDownMenu.hover1menu();
dropDownMenu.hover2menu();