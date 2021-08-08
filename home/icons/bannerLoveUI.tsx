import { styled } from 'stitches.config';
import { Svg } from '@elements/Svg';

const Banner = styled(Svg, {
  width: '192px',
  height: '48px'
});

const Text = styled('path', {
  variants: {
    background: {
      no: {
        fill: 'hsl($shade100)'
      },
      yes: {
        fill: 'hsl($homeLoveUIText)'
      }
    }
  }
});

const Background = styled('rect', {
  variants: {
    sq: {
      60: {
        size: '60px'
      },
      80: {
        size: '80px'
      }
    },
    filling: {
      meringue: {
        fill: '#EBE4C2'
      },
      aero: {
        fill: '#BFEDE0'
      }
    }
  }
});

export default function BannerLoveUI() {
  return(
    <Banner viewBox="0 0 500 125" aria-labelledby="bannerLoveUI" xmlns="http://www.w3.org/2000/svg">
      <title id="bannerLoveUI">喜歡的 UI 就要親手做出來</title>
      <Text background="no" d="M11.4102 52.1641C10.5664 52.1641 10.1445 51.7773 10.1445 51.0039C10.1445 50.2539 10.5664 49.8789 11.4102 49.8789H24.3828V48.8242C24.3828 47.8398 24.875 47.3477 25.8594 47.3477C26.8203 47.3477 27.3008 47.8398 27.3008 48.8242V49.8789H40.5547C41.4219 49.8789 41.8555 50.2656 41.8555 51.0391C41.8555 51.7891 41.4219 52.1641 40.5547 52.1641H27.3008V54.0977H38.6914C39.5117 54.0977 39.9219 54.4727 39.9219 55.2227C39.9219 55.9492 39.5117 56.3125 38.6914 56.3125H13.2734C12.4531 56.3125 12.043 55.9375 12.043 55.1875C12.043 54.4609 12.4531 54.0977 13.2734 54.0977H24.3828V52.1641H11.4102ZM40.7305 66.5781C41.6211 66.5781 42.0664 66.9648 42.0664 67.7383C42.0664 68.5117 41.6211 68.8984 40.7305 68.8984H11.2695C10.3789 68.8984 9.93359 68.5117 9.93359 67.7383C9.93359 67.3398 10.0391 67.0469 10.25 66.8594C10.4609 66.6719 10.8008 66.5781 11.2695 66.5781H18.6523L18.1602 64.4336H16.332C14.5273 64.4336 13.625 63.625 13.625 62.0078V60.2148C13.625 58.5273 14.5273 57.7188 16.332 57.7891H35.6328C37.4609 57.7891 38.3867 58.5977 38.4102 60.2148V62.0078C38.4102 63.625 37.4844 64.4336 35.6328 64.4336H33.6641L32.9961 66.5781H40.7305ZM16.5078 61.0938C16.5078 61.5391 16.5664 61.8438 16.6836 62.0078C16.8242 62.1719 17.0469 62.2656 17.3516 62.2891H34.6133C34.9414 62.2891 35.1641 62.1953 35.2812 62.0078C35.4219 61.7969 35.4922 61.4453 35.4922 60.9531C35.4922 60.5781 35.4219 60.3203 35.2812 60.1797C35.1406 60.0156 34.918 59.9219 34.6133 59.8984H17.3516C17.0703 59.8984 16.8594 59.9922 16.7188 60.1797C16.5781 60.3672 16.5078 60.6719 16.5078 61.0938ZM20.9023 64.4336L21.4648 66.5781H30.2891L30.8867 64.4336H20.9023ZM35.8086 70.6211C36.8398 70.6211 37.5898 70.8555 38.0586 71.3242C38.5273 71.7695 38.7383 72.4961 38.6914 73.5039V75.4727C38.6914 76.4805 38.457 77.2188 37.9883 77.6875C37.5195 78.1562 36.793 78.3672 35.8086 78.3203H16.1562C15.1484 78.3203 14.3984 78.0859 13.9062 77.6172C13.4375 77.1719 13.2266 76.457 13.2734 75.4727V73.5039C13.2734 72.4727 13.5078 71.7227 13.9766 71.2539C14.4453 70.7852 15.1719 70.5742 16.1562 70.6211H35.8086ZM35.7031 73.9609C35.7031 73.2812 35.3398 72.918 34.6133 72.8711H17.3516C16.6719 72.8711 16.3086 73.2344 16.2617 73.9609V74.9805C16.2617 75.6602 16.625 76.0234 17.3516 76.0703H34.6133C35.3164 76.0703 35.6797 75.707 35.7031 74.9805V73.9609ZM47.1992 52.0938C46.3086 52.0938 45.8633 51.6836 45.8633 50.8633C45.8633 50.0664 46.3086 49.668 47.1992 49.668H50.6094V48.5781C50.6094 47.6406 51.043 47.1719 51.9102 47.1719C52.7773 47.1719 53.2109 47.6406 53.2109 48.5781V49.668H56.6211V48.5781C56.6211 47.6406 57.0664 47.1719 57.957 47.1719C58.8242 47.1719 59.2578 47.6406 59.2578 48.5781V49.668H62.5977C63.0195 49.668 63.3477 49.7734 63.582 49.9844C63.8398 50.1953 63.9688 50.4883 63.9688 50.8633C63.9688 51.6836 63.5117 52.0938 62.5977 52.0938H59.2578V52.832C59.2578 53.3008 59.1406 53.6641 58.9062 53.9219C58.6953 54.1562 58.3789 54.2734 57.957 54.2734C57.0664 54.2734 56.6211 53.793 56.6211 52.832V52.0938H53.2109V52.832C53.2109 53.793 52.7773 54.2734 51.9102 54.2734C51.043 54.2734 50.6094 53.793 50.6094 52.832V52.0938H47.1992ZM77.0469 75.7539C77.4219 76.0586 77.6914 76.3398 77.8555 76.5977C78.043 76.8789 78.1367 77.1602 78.1367 77.4414C78.1367 78.6133 77.6211 79.1992 76.5898 79.1992C76.168 79.1992 75.6523 78.9297 75.043 78.3906C74.457 77.875 73.7305 77.0781 72.8633 76C71.9492 74.8281 71.2227 73.6797 70.6836 72.5547C70.1445 71.4297 69.6992 70.1172 69.3477 68.6172C68.9492 70.6797 68.4453 72.3789 67.8359 73.7148C67.1562 75.2148 66.2773 76.5039 65.1992 77.582C64.0742 78.7539 63.1953 79.3398 62.5625 79.3398C61.5547 79.3398 61.0508 78.8594 61.0508 77.8984V77.7578H60.8047H51.1719C49.3672 77.7578 48.4648 76.8438 48.4648 75.0156V67.5273C47.7383 68.4883 47.1758 68.9688 46.7773 68.9688C46.0977 68.9688 45.7578 68.5469 45.7578 67.7031C45.7578 67.2344 45.9805 66.7422 46.4258 66.2266C47.6914 64.7031 48.5703 63.3906 49.0625 62.2891C49.3203 61.6797 49.6602 61.293 50.082 61.1289H48.9922C47.5156 61.1289 46.7773 60.3789 46.7773 58.8789V56.6289C46.7773 55.9023 46.9648 55.3516 47.3398 54.9766C47.7148 54.5781 48.2656 54.3789 48.9922 54.3789H52.0508C53.5508 54.3789 54.3008 55.1523 54.3008 56.6992V58.8789C54.3008 60.3789 53.5508 61.1289 52.0508 61.1289H51.1719C51.5703 61.3164 51.7695 61.6562 51.7695 62.1484C51.7695 62.4062 51.5938 62.8047 51.2422 63.3438H55.0742L55.6719 62.1484C56 61.5391 56.3516 61.1758 56.7266 61.0586C55.6484 60.8477 55.1094 60.0977 55.1094 58.8086V56.6289C55.1094 55.9023 55.2969 55.3516 55.6719 54.9766C56.0703 54.5781 56.6328 54.3789 57.3594 54.3789H60.5234C62 54.3789 62.7383 55.1289 62.7383 56.6289V58.8789C62.7383 59.1133 62.7266 59.2891 62.7031 59.4062C63.8516 56.8281 64.8477 53.3828 65.6914 49.0703C65.9258 47.9219 66.3945 47.3477 67.0977 47.3477C68.0586 47.3477 68.5391 47.7344 68.5391 48.5078L68.4336 49.2812L67.4492 53.3242H75.0781C76.8828 53.3242 77.7852 53.9688 77.7852 55.2578C77.7852 55.6562 77.5742 56.3125 77.1523 57.2266L76.3438 59.0898C75.6875 60.5898 75.125 61.6914 74.6562 62.3945C74.2109 63.0977 73.8125 63.4492 73.4609 63.4492C72.5703 63.4492 72.125 63.0859 72.125 62.3594C72.125 62.0547 72.2539 61.6211 72.5117 61.0586C72.9336 60.1211 73.3789 59.0195 73.8477 57.7539L74.2344 56.7344C74.2812 56.5938 74.3047 56.4883 74.3047 56.418C74.3047 56.1602 74.0938 56.0312 73.6719 56.0312H66.6406C66.2656 57.0156 65.7266 58.4922 65.0234 60.4609C64.6719 61.4688 64.2031 61.9727 63.6172 61.9727C62.7266 61.9727 62.2812 61.5391 62.2812 60.6719C62.2812 60.5781 62.293 60.4961 62.3164 60.4258C61.9648 60.8945 61.3906 61.1289 60.5938 61.1289H57.7812C58.2266 61.2695 58.4492 61.5742 58.4492 62.043C58.4492 62.3477 58.2383 62.7812 57.8164 63.3438H61.9648C62.7617 63.3438 63.1602 63.707 63.1602 64.4336C63.1602 65.1602 62.7617 65.5234 61.9648 65.5234H57.3242V67.3516H61.6836C62.0352 67.3516 62.3047 67.4453 62.4922 67.6328C62.7031 67.7969 62.8086 68.0312 62.8086 68.3359C62.8086 68.9922 62.4336 69.3203 61.6836 69.3203H57.3242V71.2539H61.4727C62.2227 71.2539 62.5977 71.582 62.5977 72.2383C62.5977 72.8945 62.2227 73.2227 61.4727 73.2227H57.3242V75.5078H60.8047C61.6016 75.5078 62.0586 75.7422 62.1758 76.2109C64.168 74.5938 65.5625 72.3672 66.3594 69.5312C66.7578 68.125 67.0508 66.6016 67.2383 64.9609C67.4492 63.2969 67.5547 61.668 67.5547 60.0742V58.4219C67.5547 57.4609 68.0234 56.9805 68.9609 56.9805C69.8984 56.9805 70.3672 57.4492 70.3672 58.3867L70.332 59.3711C70.2617 61.1758 70.1914 62.4297 70.1211 63.1328C71.2461 68.7578 73.5547 72.9648 77.0469 75.7539ZM49.0273 58.4219C49.0273 58.6328 49.0742 58.7852 49.168 58.8789C49.2617 58.9492 49.4258 58.9844 49.6602 58.9844H51.4531C51.6406 58.9844 51.7695 58.9492 51.8398 58.8789C51.9336 58.7852 51.9922 58.6328 52.0156 58.4219V57.1211C52.0156 56.9102 51.9688 56.7695 51.875 56.6992C51.8047 56.6055 51.6641 56.5469 51.4531 56.5234H49.6602C49.4492 56.5234 49.2969 56.5703 49.2031 56.6641C49.1094 56.7578 49.0508 56.9102 49.0273 57.1211V58.4219ZM57.3945 58.4219C57.3945 58.6094 57.4297 58.75 57.5 58.8438C57.5938 58.9141 57.7461 58.9609 57.957 58.9844H59.8906C60.2656 58.9844 60.4531 58.7969 60.4531 58.4219V57.1211C60.4531 56.9336 60.4062 56.793 60.3125 56.6992C60.2422 56.6055 60.1016 56.5469 59.8906 56.5234H57.957C57.582 56.5234 57.3945 56.7227 57.3945 57.1211V58.4219ZM51.5938 65.5234C51.3594 65.5234 51.1953 65.5703 51.1016 65.6641C51.0312 65.7578 50.9844 65.9219 50.9609 66.1562V67.3516H54.8633V65.5234H51.5938ZM54.8633 71.2539V69.3203H50.9609V71.2539H54.8633ZM50.9609 74.7695C50.9609 75.2383 51.2188 75.4844 51.7344 75.5078H54.8633V73.2227H50.9609V74.7695ZM104.469 79.2344C103.812 79.2109 103.344 79.082 103.062 78.8477C102.781 78.6133 102.641 78.25 102.641 77.7578C102.641 76.7969 103.18 76.3164 104.258 76.3164C105.711 76.3164 106.73 76.2812 107.316 76.2109C107.902 76.1641 108.348 76.0352 108.652 75.8242C108.957 75.6133 109.203 75.2383 109.391 74.6992C109.719 73.7383 109.977 71.3945 110.164 67.668C110.352 63.9414 110.445 60.4023 110.445 57.0508C110.445 56.1602 109.93 55.7148 108.898 55.7148H101.059C100.66 56.957 99.9453 58.3867 98.9141 60.0039C98.5859 60.543 98.1758 60.8125 97.6836 60.8125C97.4258 60.8125 97.1797 60.7422 96.9453 60.6016C96.4766 60.3438 96.2422 59.9805 96.2422 59.5117C96.2422 59.207 96.3359 58.8906 96.5234 58.5625C97.5078 56.7109 98.2344 55.1523 98.7031 53.8867C99.2891 52.3398 99.8398 50.6055 100.355 48.6836C100.473 48.2852 100.648 47.9805 100.883 47.7695C101.141 47.5352 101.445 47.418 101.797 47.418C101.891 47.418 102.055 47.4414 102.289 47.4883C102.992 47.6523 103.344 48.0742 103.344 48.7539C103.344 48.9883 103.309 49.2461 103.238 49.5273C103.074 50.207 102.875 50.8867 102.641 51.5664C102.406 52.2227 102.184 52.7383 101.973 53.1133H110.41C112.473 53.1133 113.504 53.9805 113.504 55.7148C113.504 60.1211 113.387 64.375 113.152 68.4766C112.918 72.5547 112.52 75.2852 111.957 76.668C111.535 77.6523 110.891 78.332 110.023 78.707C109.156 79.082 107.844 79.2695 106.086 79.2695C105.383 79.2695 104.844 79.2578 104.469 79.2344ZM85.6602 78.6719C84.7695 78.6719 84.0898 78.4375 83.6211 77.9688C83.1758 77.5234 82.9531 76.8555 82.9531 75.9648V55.9609C82.9531 55.0703 83.1758 54.3906 83.6211 53.9219C84.0664 53.4531 84.7227 53.2188 85.5898 53.2188H87.3828C87.5703 52.1641 87.793 50.6758 88.0508 48.7539C88.0977 48.332 88.25 48.0156 88.5078 47.8047C88.7656 47.5938 89.1055 47.4883 89.5273 47.4883C90.6992 47.4883 91.2031 48.0859 91.0391 49.2812C90.8516 50.5938 90.5469 51.9062 90.125 53.2188H92.7969C94.5781 53.2188 95.4688 54.1328 95.4688 55.9609L95.5039 75.9648C95.5039 77.7695 94.6016 78.6719 92.7969 78.6719H85.6602ZM92.6211 57.0508C92.6211 56.2773 92.2344 55.8906 91.4609 55.8906H86.9961C86.2227 55.8906 85.8359 56.2773 85.8359 57.0508V64.082H92.6211V57.0508ZM104.223 69.9883C103.848 69.9883 103.52 69.8594 103.238 69.6016C102.957 69.3203 102.676 68.9102 102.395 68.3711C101.949 67.5742 101.293 66.5078 100.426 65.1719L99.9336 64.3984C99.8164 64.2344 99.7109 64.0352 99.6172 63.8008C99.5469 63.5664 99.5117 63.3672 99.5117 63.2031C99.5117 62.8047 99.6289 62.5 99.8633 62.2891C100.098 62.0547 100.402 61.9375 100.777 61.9375C101.152 61.9375 101.551 62.1484 101.973 62.5703C102.395 62.9922 102.934 63.6836 103.59 64.6445C104.949 66.6836 105.629 68.0312 105.629 68.6875C105.629 69.0859 105.5 69.4023 105.242 69.6367C105.008 69.8711 104.668 69.9883 104.223 69.9883ZM91.4609 76C92.2344 76 92.6211 75.6133 92.6211 74.8398V66.6836H85.8359V74.8398C85.8359 75.6133 86.2227 76 86.9961 76H91.4609Z" />
      <Text background="no" d="M212.375 69.0273C211.414 69.0273 210.934 68.582 210.934 67.6914C210.934 66.7773 211.414 66.3203 212.375 66.3203H217.965V64.0703C217.965 62.9922 218.445 62.4531 219.406 62.4531C220.391 62.4531 220.883 62.9922 220.883 64.0703V66.3203H226.297C227.305 66.3203 227.809 66.7773 227.809 67.6914C227.809 68.582 227.305 69.0273 226.297 69.0273H212.375ZM225.066 93.8828C224.176 93.8828 223.73 93.4023 223.73 92.4414C223.73 92.2305 223.848 91.9727 224.082 91.668C224.34 91.3633 224.738 90.9648 225.277 90.4727C228.207 87.8945 230.059 84.3203 230.832 79.75C231.184 77.7344 231.43 75.4258 231.57 72.8242H228.406C227.281 72.8242 226.719 72.3555 226.719 71.418C226.719 70.457 227.281 69.9766 228.406 69.9766H231.711L231.852 66.7773L231.816 64.0703C231.816 63.0156 232.297 62.4883 233.258 62.4883C234.172 62.4883 234.629 62.9922 234.629 64L234.418 69.9766H240.746C241.895 69.9766 242.469 70.457 242.469 71.418C242.469 72.3555 241.895 72.8242 240.746 72.8242H234.277C233.926 77.5352 233.246 81.4492 232.238 84.5664C231.254 87.5898 229.754 90.1094 227.738 92.125C226.566 93.2969 225.676 93.8828 225.066 93.8828ZM239.516 68.8516C239.141 68.8516 238.473 68.1719 237.512 66.8125L236.984 66.0742C236.633 65.6055 236.457 65.2656 236.457 65.0547C236.457 64.3516 236.891 64 237.758 64C238.32 64 239.012 64.5508 239.832 65.6523C240.582 66.6602 240.957 67.3281 240.957 67.6562C240.957 68.4531 240.477 68.8516 239.516 68.8516ZM216.277 94.0586C215.176 94.0586 214.625 93.5898 214.625 92.6523C214.625 91.7148 215.059 91.2461 215.926 91.2461H217.051C217.824 91.2461 218.223 90.7188 218.246 89.6641V80.9453H215.188C214.203 80.9453 213.477 80.7227 213.008 80.2773C212.562 79.832 212.352 79.1289 212.375 78.168V74.3008C212.375 73.3164 212.598 72.6016 213.043 72.1562C213.512 71.6875 214.227 71.4648 215.188 71.4883H223.59C224.598 71.4883 225.336 71.7227 225.805 72.1914C226.273 72.6367 226.484 73.3398 226.438 74.3008V78.168C226.438 79.1523 226.215 79.8789 225.77 80.3477C225.324 80.793 224.621 80.9922 223.66 80.9453H220.988V90.8242C220.988 91.9727 220.73 92.8164 220.215 93.3555C219.699 93.8945 218.891 94.1289 217.789 94.0586H216.277ZM222.641 78.5195C223.344 78.5195 223.707 78.168 223.73 77.4648V74.9688C223.73 74.3125 223.367 73.9609 222.641 73.9141H216.207C215.551 73.9141 215.199 74.2656 215.152 74.9688V77.4648C215.152 78.1211 215.504 78.4727 216.207 78.5195H222.641ZM237.828 93.4609C236.258 93.4609 235.191 93.3203 234.629 93.0391C234.066 92.7344 233.785 92.1367 233.785 91.2461V78.0977C233.785 77.0898 234.23 76.5859 235.121 76.5859C236.035 76.5859 236.492 77.0898 236.492 78.0977V89.6641C236.492 90.3906 236.891 90.7539 237.688 90.7539C238.789 90.7539 239.504 90.6719 239.832 90.5078C240.137 90.3438 240.301 89.5703 240.324 88.1875C240.348 87.4844 240.465 86.9688 240.676 86.6406C240.91 86.2891 241.25 86.1133 241.695 86.1133C242.609 86.1133 243.066 86.5703 243.066 87.4844C243.066 90.25 242.715 91.9375 242.012 92.5469C241.285 93.1562 239.891 93.4609 237.828 93.4609ZM212.27 90.8242C211.379 90.8242 210.934 90.3438 210.934 89.3828C210.934 89.0781 211.168 88.5625 211.637 87.8359C212.152 87.0625 212.773 85.7266 213.5 83.8281C213.969 82.6562 214.461 82.0703 214.977 82.0703C215.797 82.0703 216.207 82.4805 216.207 83.3008C216.207 84.1914 215.551 85.9609 214.238 88.6094C213.512 90.0859 212.855 90.8242 212.27 90.8242ZM225.84 87.9766C225.301 87.9766 224.82 87.5547 224.398 86.7109C223.977 85.8203 223.531 85 223.062 84.25C222.852 83.9219 222.746 83.6406 222.746 83.4062C222.746 82.6328 223.156 82.2461 223.977 82.2461C224.516 82.2461 225.184 82.8789 225.98 84.1445C226.355 84.7305 226.637 85.2344 226.824 85.6562C227.035 86.0781 227.141 86.3711 227.141 86.5352C227.141 87.4961 226.707 87.9766 225.84 87.9766ZM277.555 81.0156C278.539 81.0156 279.031 81.4258 279.031 82.2461C279.031 83.0898 278.539 83.5117 277.555 83.5117H270.91C269.926 85.668 268.848 87.3789 267.676 88.6445C269.762 89.2539 271.777 89.9102 273.723 90.6133C274.848 91.0117 275.68 91.3867 276.219 91.7383C276.758 92.1133 277.027 92.4883 277.027 92.8633C277.027 93.8711 276.57 94.375 275.656 94.375C275.211 94.375 274.18 94.0117 272.562 93.2852C270.781 92.4883 268.59 91.6562 265.988 90.7891L265.391 90.5781H265.355C262.379 92.5703 257.855 93.7305 251.785 94.0586L249.781 94.1289C248.773 94.1523 248.27 93.6719 248.27 92.6875C248.27 92.4766 248.305 92.3008 248.375 92.1602C248.469 92.043 248.598 91.9258 248.762 91.8086C249.09 91.5742 250.074 91.4453 251.715 91.4219C256.449 91.2812 259.941 90.6953 262.191 89.6641C260.41 89.2656 258.605 88.9258 256.777 88.6445C254.785 88.3633 253.789 87.7891 253.789 86.9219C253.789 86.4062 254.234 85.6328 255.125 84.6016L255.934 83.5117H248.375C247.438 83.5117 246.969 83.0898 246.969 82.2461C246.969 81.4258 247.438 81.0156 248.375 81.0156H257.586L259.238 78.2031H252.559C250.52 78.2031 249.5 77.2539 249.5 75.3555V72.2266C249.5 70.2109 250.52 69.2383 252.559 69.3086H257.516V66.4961H249.008C247.953 66.4961 247.426 66.0625 247.426 65.1953C247.426 64.3516 247.953 63.9297 249.008 63.9297H276.957C277.988 63.9297 278.504 64.3633 278.504 65.2305C278.504 66.0742 277.988 66.4961 276.957 66.4961H267.922V69.3086H273.371C274.426 69.3086 275.199 69.5547 275.691 70.0469C276.207 70.5156 276.465 71.2422 276.465 72.2266V75.2852C276.465 77.3008 275.434 78.2734 273.371 78.2031H262.227L261.91 78.8359L260.645 81.0156H277.555ZM260.117 66.4961V69.3086H265.355V66.4961H260.117ZM257.516 71.5938H253.613C253.191 71.5938 252.863 71.6992 252.629 71.9102C252.418 72.1211 252.301 72.4258 252.277 72.8242V74.6875C252.277 75.0625 252.395 75.3555 252.629 75.5664C252.863 75.7773 253.191 75.8945 253.613 75.918H257.516V71.5938ZM260.117 71.5938V75.918H265.355V71.5938H260.117ZM267.922 75.918H272.352C273.172 75.918 273.605 75.5078 273.652 74.6875V72.8242C273.652 72.0273 273.219 71.6172 272.352 71.5938H267.922V75.918ZM264.863 87.9062C266.035 86.8516 267.031 85.3867 267.852 83.5117H259.098L257.797 85.3047C257.562 85.6328 257.445 85.9258 257.445 86.1836C257.445 86.3711 257.715 86.5352 258.254 86.6758L264.828 87.9062H264.863ZM298.086 87.4141C298.086 87.8594 297.98 88.1875 297.77 88.3984C297.582 88.5859 297.277 88.6797 296.855 88.6797C296.41 88.6797 295.812 88.2695 295.062 87.4492C294.57 86.9336 293.891 86.3594 293.023 85.7266L292.531 85.1992V92.7227C292.531 93.8711 292.074 94.4453 291.16 94.4453C290.246 94.4453 289.789 93.8711 289.789 92.7227V84.9531C288.922 86.4297 287.879 87.8359 286.66 89.1719C285.441 90.4844 284.598 91.1406 284.129 91.1406C283.332 91.1406 282.934 90.6953 282.934 89.8047C282.934 89.2422 283.438 88.5742 284.445 87.8008C286.578 86.1836 288.219 84.2383 289.367 81.9648H284.902C283.824 81.9648 283.285 81.543 283.285 80.6992C283.285 79.8555 283.824 79.4336 284.902 79.4336H289.789V76.0234H284.516C283.484 76.0234 282.969 75.5898 282.969 74.7227C282.969 74.2773 283.086 73.9609 283.32 73.7734C283.578 73.5625 283.977 73.457 284.516 73.457H286.73C286.566 71.957 286.285 70.3516 285.887 68.6406H284.727C283.836 68.6406 283.391 68.2188 283.391 67.375C283.391 66.5078 283.836 66.0742 284.727 66.0742H289.824V64C289.824 62.875 290.281 62.3125 291.195 62.3125C292.109 62.3125 292.566 62.875 292.566 64V66.0742H297.172C298.039 66.0742 298.473 66.5078 298.473 67.375C298.473 68.2188 298.039 68.6406 297.172 68.6406H296.223L295.238 73.457H297.102C298.133 73.457 298.648 73.8906 298.648 74.7578C298.648 75.6016 298.133 76.0234 297.102 76.0234H292.531V79.4336H296.75C297.781 79.4336 298.297 79.8555 298.297 80.6992C298.297 81.1445 298.168 81.4727 297.91 81.6836C297.676 81.8711 297.289 81.9648 296.75 81.9648H292.531V84.1094C292.672 83.9453 292.801 83.8281 292.918 83.7578C293.035 83.6641 293.188 83.6172 293.375 83.6172C293.773 83.6172 294.664 84.1211 296.047 85.1289C297.406 86.1133 298.086 86.875 298.086 87.4141ZM313.766 86.957C314.633 86.957 315.066 87.4141 315.066 88.3281C315.066 90.4609 314.715 91.8555 314.012 92.5117C313.309 93.168 312.148 93.4961 310.531 93.4961C308.891 93.4961 307.836 93.332 307.367 93.0039C306.945 92.6992 306.711 92.0898 306.664 91.1758V83.3008H304.625C304.531 85.5508 304.145 87.4023 303.465 88.8555C302.762 90.3555 301.672 91.5977 300.195 92.582C298.625 93.6133 297.43 94.1289 296.609 94.1289C295.766 94.1289 295.344 93.6719 295.344 92.7578C295.344 92.125 295.695 91.6797 296.398 91.4219C298.719 90.5781 300.324 89.2773 301.215 87.5195C301.637 86.6523 301.93 85.2461 302.094 83.3008C300.266 83.3477 299.352 82.375 299.352 80.3828V66.8125C299.352 64.8438 300.324 63.8594 302.27 63.8594H310.145C311.246 63.8594 312.031 64.0938 312.5 64.5625C312.992 65.0312 313.203 65.793 313.133 66.8477V80.3477C313.133 81.4023 312.898 82.1758 312.43 82.668C311.961 83.1367 311.199 83.3477 310.145 83.3008H309.23V90.0508C309.23 90.5898 309.688 90.8594 310.602 90.8594C311.492 90.8594 312.02 90.6836 312.184 90.332C312.371 89.9336 312.477 89.2773 312.5 88.3633C312.523 87.4258 312.945 86.957 313.766 86.957ZM302.094 69.4492H310.426V67.5508C310.426 66.8711 310.062 66.5078 309.336 66.4609H303.148C302.492 66.4609 302.141 66.8242 302.094 67.5508V69.4492ZM288.348 68.6406C288.605 69.7656 288.887 71.3711 289.191 73.457H292.848L293.727 68.6406H288.348ZM302.094 71.9805V75.0391H310.426V71.9805H302.094ZM309.336 80.6992C310.039 80.6992 310.402 80.3359 310.426 79.6094V77.5352H302.094V79.6445C302.094 80.3008 302.445 80.6523 303.148 80.6992H309.336ZM330.184 94.1641C328.965 94.1641 328.355 93.6484 328.355 92.6172C328.355 91.6094 328.965 91.1055 330.184 91.1055H332.363C332.879 91.1055 333.277 90.9648 333.559 90.6836C333.84 90.4023 333.992 89.9922 334.016 89.4531V82.7383H320.727C319.602 82.7383 319.039 82.2695 319.039 81.332C319.039 80.3945 319.602 79.9258 320.727 79.9258H334.016V74.6172H323.609C322.508 74.6172 321.957 74.1602 321.957 73.2461C321.957 72.3555 322.508 71.9102 323.609 71.9102H334.016V66.8828L332.539 66.918C327.195 67.3398 323.914 67.5508 322.695 67.5508C321.406 67.5508 320.762 67.0469 320.762 66.0391C320.762 65.6406 320.938 65.2891 321.289 64.9844C321.477 64.7969 322.32 64.7031 323.82 64.7031C325.648 64.7031 327.734 64.6094 330.078 64.4219C333.031 64.1875 335.434 63.9648 337.285 63.7539C339.84 63.4727 341.832 63.1914 343.262 62.9102C345.02 62.5586 345.992 62.3828 346.18 62.3828C347.328 62.3828 347.902 62.9336 347.902 64.0352C347.902 64.293 347.773 64.5273 347.516 64.7383C347.281 64.9492 346.895 65.1367 346.355 65.3008C345.395 65.6289 342.242 66.0625 336.898 66.6016V71.9102H346.461C347.023 71.9102 347.434 72.0273 347.691 72.2617C347.973 72.4727 348.113 72.8125 348.113 73.2812C348.113 74.1719 347.562 74.6172 346.461 74.6172H336.898V79.9258H349.203C350.375 79.9258 350.961 80.3945 350.961 81.332C350.961 82.2695 350.375 82.7383 349.203 82.7383H336.898V90.0508C336.992 91.5273 336.699 92.5938 336.02 93.25C335.34 93.9297 334.273 94.2344 332.82 94.1641H330.184Z" />
      <Text background="no" d="M451.254 79.6094C452.215 79.6094 452.695 80.2188 452.695 81.4375V88.9258C452.695 90.1914 452.391 91.1406 451.781 91.7734C451.148 92.4062 450.199 92.7109 448.934 92.6875H427.137C425.871 92.6875 424.934 92.3828 424.324 91.7734C423.691 91.1406 423.375 90.1914 423.375 88.9258V81.4375C423.375 80.2422 423.855 79.6445 424.816 79.6445C425.801 79.6445 426.293 80.2305 426.293 81.4023V88.2578C426.293 89.2891 426.82 89.8047 427.875 89.8047H436.418V77.2891H428.402C427.137 77.2891 426.211 77.0195 425.625 76.4805C425.062 75.9414 424.828 75.0625 424.922 73.8438V66.9531C424.922 65.7812 425.414 65.1953 426.398 65.1953C426.867 65.1953 427.219 65.3359 427.453 65.6172C427.711 65.8984 427.84 66.3086 427.84 66.8477V72.8594C427.84 73.8906 428.344 74.4062 429.352 74.4062H436.418V64.2812C436.418 62.9922 436.922 62.3477 437.93 62.3477C438.914 62.3477 439.406 62.9922 439.406 64.2812V74.4062H446.719C447.75 74.4062 448.266 73.8906 448.266 72.8594V66.8828C448.266 65.7578 448.746 65.1953 449.707 65.1953C450.691 65.1953 451.184 65.793 451.184 66.9883V73.8438C451.348 76.3047 450.188 77.4531 447.703 77.2891H439.406V89.8047H448.23C449.215 89.8047 449.73 89.2891 449.777 88.2578V81.4023C449.777 80.207 450.27 79.6094 451.254 79.6094ZM488.906 88.75C489.586 89.0312 489.926 89.4766 489.926 90.0859C489.926 90.5781 489.762 90.9883 489.434 91.3164C489.129 91.6445 488.789 91.7852 488.414 91.7383C487.055 91.5508 485.086 90.5898 482.508 88.8555C479.438 86.793 477.035 84.7773 475.301 82.8086V92.7578C475.301 93.8359 474.809 94.375 473.824 94.375C472.84 94.375 472.348 93.8359 472.348 92.7578V82.9492C470.777 84.7305 468.844 86.4531 466.547 88.1172C464.273 89.7578 462.094 90.9648 460.008 91.7383C459.797 91.8086 459.598 91.8438 459.41 91.8438C459.035 91.8438 458.73 91.7031 458.496 91.4219C458.262 91.1406 458.145 90.7891 458.145 90.3672C458.145 90.0625 458.227 89.8047 458.391 89.5938C458.578 89.3594 458.871 89.1602 459.27 88.9961C461.262 88.1055 463.559 86.7344 466.16 84.8828C468.785 83.0078 470.848 81.2148 472.348 79.5039V69.2031H460.5C459.375 69.2031 458.812 68.7578 458.812 67.8672C458.812 66.9766 459.375 66.5312 460.5 66.5312H472.348V64C472.348 62.9219 472.84 62.3828 473.824 62.3828C474.809 62.3828 475.301 62.9219 475.301 64V66.5312H487.184C488.285 66.5312 488.836 66.9766 488.836 67.8672C488.836 68.7578 488.285 69.2031 487.184 69.2031H475.301V79.6797C476.988 81.4609 478.98 83.1367 481.277 84.707C483.598 86.2773 486.141 87.625 488.906 88.75ZM484.406 71.5938C484.406 72.2734 484.102 73.2227 483.492 74.4414C485.133 75.543 486.715 76.7852 488.238 78.168C488.637 78.4961 488.836 78.8945 488.836 79.3633C488.836 79.7852 488.707 80.125 488.449 80.3828C488.215 80.6172 487.863 80.7344 487.395 80.7344C487.113 80.7344 486.855 80.6641 486.621 80.5234C486.387 80.3594 486.094 80.1016 485.742 79.75L485.18 79.1875C484.266 78.25 483.316 77.3359 482.332 76.4453C481.418 77.9922 480.422 79.1992 479.344 80.0664C478.945 80.3945 478.57 80.5586 478.219 80.5586C477.891 80.5586 477.598 80.4297 477.34 80.1719C477.082 79.9141 476.953 79.6445 476.953 79.3633C476.953 78.9883 477.164 78.5664 477.586 78.0977C478.5 77.1367 479.273 76.1289 479.906 75.0742C480.539 74.0195 481.125 72.7891 481.664 71.3828C481.922 70.7031 482.379 70.3633 483.035 70.3633C483.434 70.3633 483.762 70.4922 484.02 70.75C484.277 70.9844 484.406 71.2656 484.406 71.5938ZM466.723 71.8047C466.723 72.3906 466.441 73.3047 465.879 74.5469C467.848 75.9062 469.254 76.9961 470.098 77.8164C470.496 78.2148 470.695 78.6133 470.695 79.0117C470.695 79.4102 470.566 79.7266 470.309 79.9609C470.051 80.1953 469.711 80.3125 469.289 80.3125C469.008 80.3125 468.75 80.2422 468.516 80.1016C468.281 79.9375 468 79.6914 467.672 79.3633L464.789 76.5156C463.594 78.5781 462.434 80.1016 461.309 81.0859C460.91 81.4609 460.477 81.6484 460.008 81.6484C459.656 81.6484 459.352 81.5195 459.094 81.2617C458.883 81.0508 458.777 80.8047 458.777 80.5234C458.777 80.1016 459.012 79.6211 459.48 79.082C461.402 76.7852 462.867 74.3125 463.875 71.6641C464.18 70.9141 464.684 70.5391 465.387 70.5391C465.785 70.5391 466.102 70.668 466.336 70.9258C466.594 71.1836 466.723 71.4766 466.723 71.8047Z" />
      <Background x="123" y="22" sq={80} filling="meringue"/>
      <Text background="yes" d="M152.648 90.7734C149.273 90.7734 146.062 90.0703 143.016 88.6641C139.781 87.2109 137.203 85.0078 135.281 82.0547C133.359 79.1016 132.398 75.6094 132.398 71.5781V43.8047C132.398 42.9141 132.703 42.1406 133.312 41.4844C133.969 40.8281 134.742 40.5 135.633 40.5C136.523 40.5 137.297 40.8281 137.953 41.4844C138.609 42.1406 138.938 42.9141 138.938 43.8047V71.7891C138.938 74.6484 139.594 77.0156 140.906 78.8906C142.125 80.8125 143.766 82.2891 145.828 83.3203C147.938 84.3047 150.211 84.7969 152.648 84.7969C155.039 84.7969 157.289 84.3047 159.398 83.3203C161.602 82.2891 163.312 80.7891 164.531 78.8203C165.75 76.8047 166.359 74.4609 166.359 71.7891V43.8047C166.359 42.9141 166.664 42.1406 167.273 41.4844C167.93 40.8281 168.703 40.5 169.594 40.5C170.484 40.5 171.258 40.8281 171.914 41.4844C172.57 42.1406 172.898 42.9141 172.898 43.8047V71.5781C172.898 75.7031 171.914 79.2422 169.945 82.1953C168.023 85.0078 165.516 87.1406 162.422 88.5938C159.375 90.0469 156.117 90.7734 152.648 90.7734ZM189.281 90.4219C188.391 90.4219 187.617 90.1172 186.961 89.5078C186.352 88.8516 186.047 88.0781 186.047 87.1875V43.8047C186.047 42.9141 186.352 42.1406 186.961 41.4844C187.617 40.8281 188.391 40.5 189.281 40.5C190.172 40.5 190.945 40.8281 191.602 41.4844C192.258 42.1406 192.586 42.9141 192.586 43.8047V87.1875C192.586 88.0781 192.258 88.8516 191.602 89.5078C190.945 90.1172 190.172 90.4219 189.281 90.4219Z"/>
      <Background x="356" y="42" sq={60} filling="aero"/>
      <Text background="yes" d="M371.469 93.5938C370.25 93.5938 369.641 92.9062 369.641 91.5312V69.9688L368.703 71.75C367.547 73.9375 366.656 75.0312 366.031 75.0312C365.062 75.0312 364.578 74.375 364.578 73.0625C364.578 72.5625 365.188 71.3125 366.406 69.3125C367.312 67.8438 368.547 65.0781 370.109 61.0156C371.266 57.9219 372.094 55.3281 372.594 53.2344C372.969 51.6094 373.703 50.7969 374.797 50.7969C376.047 50.7969 376.672 51.3281 376.672 52.3906C376.672 53.5469 375.547 56.8281 373.297 62.2344V91.5312C373.297 92.9062 372.688 93.5938 371.469 93.5938ZM388.156 93.3594C386.875 93.3594 386.234 92.7188 386.234 91.4375C386.234 90.5938 386.875 89.8906 388.156 89.3281C391.188 88.0156 393.719 86.0625 395.75 83.4688C394 79.8438 392.844 74.5156 392.281 67.4844C391.031 70.0156 390.016 71.2812 389.234 71.2812C388.234 71.2812 387.734 70.6406 387.734 69.3594C387.734 68.9531 387.984 68.3594 388.484 67.5781C390.578 64.3281 392.359 59.4062 393.828 52.8125C394.141 51.4688 394.781 50.7969 395.75 50.7969C397 50.7969 397.625 51.3438 397.625 52.4375C397.625 53.0625 396.906 55.5625 395.469 59.9375H405.641C406.828 59.9375 407.422 60.5625 407.422 61.8125C407.422 63.0625 406.828 63.6875 405.641 63.6875H404.375L404.188 66.6406C403.719 74.0781 402.266 79.7344 399.828 83.6094C401.328 85.4844 403.484 87.3125 406.297 89.0938C407.047 89.5625 407.422 90.2031 407.422 91.0156C407.422 92.4531 406.734 93.1719 405.359 93.1719C404.328 93.1719 402.547 91.875 400.016 89.2812C398.953 88.125 398.172 87.2188 397.672 86.5625C396.234 88.125 394.469 89.6719 392.375 91.2031C390.375 92.6406 388.969 93.3594 388.156 93.3594ZM379.672 88.4375C378.422 88.4375 377.516 88.1719 376.953 87.6406C376.391 87.0781 376.141 86.2031 376.203 85.0156V74.7969C376.203 73.5469 376.469 72.6562 377 72.125C377.531 71.5625 378.391 71.3125 379.578 71.375H381.031V63.2656H377.188C375.875 63.2656 375.219 62.6875 375.219 61.5312C375.219 60.375 375.875 59.7969 377.188 59.7969H381.031V52.7188C381.031 51.4688 381.609 50.8438 382.766 50.8438C383.922 50.8438 384.5 51.4688 384.5 52.7188V59.7969H388.109C389.422 59.7969 390.078 60.375 390.078 61.5312C390.078 62.6875 389.422 63.2656 388.109 63.2656H384.5V71.375H386.141C387.328 71.375 388.188 71.6562 388.719 72.2188C389.281 72.75 389.531 73.6094 389.469 74.7969V85.0156C389.469 86.2344 389.188 87.125 388.625 87.6875C388.094 88.25 387.234 88.5 386.047 88.4375H379.672ZM397.906 80.2344C399.656 77.0469 400.703 71.5312 401.047 63.6875H395.188C395.5 71.125 396.406 76.6406 397.906 80.2344ZM384.641 85.0156C385.547 85.0156 386.031 84.5312 386.094 83.5625V76.25C386.094 75.3438 385.609 74.8594 384.641 74.7969H381.078C380.141 74.7969 379.656 75.2812 379.625 76.25V83.5625C379.625 84.4688 380.109 84.9531 381.078 85.0156H384.641Z"/>
    </Banner>
  );
}
