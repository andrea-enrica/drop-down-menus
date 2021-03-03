let navBar = () => {
    let menuBar = document.getElementById('menuBar');
    let topNav = document.createElement('div');
    let dropDown1 = document.createElement('div');
    let dropDown2 = document.createElement('div');
    let clickBttn = document.createElement('button');
    let hover1Bttn = document.createElement('button');
    let hover2Bttn = document.createElement('button');
    let hover3Bttn = document.createElement('button');
    let dropdownIcon1 = document.createElement('i');
    let dropdownIcon2 = document.createElement('i');
    let link1 = document.createElement('a');
    let link2 = document.createElement('a');
    let link3 = document.createElement('a');
    let link4 = document.createElement('a');
    let link5 = document.createElement('a');

    topNav.setAttribute('class', 'topNav');
    dropDown1.setAttribute('id', 'dropdown1');
    dropDown1.classList =  'itemOff';
    dropDown2.setAttribute('id', 'dropdown2');
    dropDown2.classList = 'itemOff';
    clickBttn.innerText = 'Click';
    clickBttn.setAttribute('id', 'click');
    hover1Bttn.innerText = 'Hover 1';
    hover1Bttn.setAttribute('class', 'itemOff');
    hover1Bttn.setAttribute('id','hover1');
    hover2Bttn.innerText = 'Hover 2';
    hover2Bttn.setAttribute('class', 'itemOff');
    hover2Bttn.setAttribute('id','hover2');
    hover3Bttn.innerText = 'Hover 3';
    hover3Bttn.setAttribute('class', 'itemOff');
    hover3Bttn.setAttribute('id','hover3');
    dropdownIcon1.setAttribute('id', 'icon');
    dropdownIcon1.classList = 'fa fa-caret-down';
    dropdownIcon2.setAttribute('id', 'icon');
    dropdownIcon2.classList = 'fa fa-caret-down';
    link1.innerHTML = "Link 1";
    link1.href = '#';
    link2.innerHTML = "Link 2";
    link2.href = '#';
    link3.innerHTML = "Link 3";
    link3.href = '#';
    link4.innerHTML = "Link 4";
    link4.href = '#';
    link5.innerHTML = "Link 5";
    link5.href = '#';
    
    dropDown1.appendChild(link1);
    dropDown1.appendChild(link2);
    dropDown1.appendChild(link3);
    dropDown2.appendChild(link4);
    dropDown2.appendChild(link5);
    hover2Bttn.appendChild(dropdownIcon1);
    hover3Bttn.appendChild(dropdownIcon2);
    topNav.appendChild(clickBttn);
    topNav.appendChild(hover1Bttn);
    topNav.appendChild(hover2Bttn);
    topNav.appendChild(dropDown1);
    topNav.appendChild(hover3Bttn);
    topNav.appendChild(dropDown2);
    menuBar.appendChild(topNav);

    return menuBar;
}

export { navBar };