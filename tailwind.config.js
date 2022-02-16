module.exports = {  
  content: ["*.{html,js}"],

  theme: {    
    extend: {      
      backgroundImage: {        
        'hero-pattern': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJfZxdWK4TSK8xQiMzv3Q-fkKQI0fg_lDG4bssfK9lUtV0YYYzqFtZcKuH8ozBqfSuXo&usqp=CAU')",

        'footer-texture': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png')",      
      },
      
      height: {       
        'div': '700px',   
        'sm': '100px',   
      }
    },

    fontFamily: {      
      'gfont': ['Shizuru', 'cursive'],
    }
  },

  plugins: []
}