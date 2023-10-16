import {Linking} from 'react-native';
import {appIcons, appImages} from '../../assets';
import NavService from '../../helpers/NavService';
export const categoriesData = ['Nike Revolution', 'Addidas', 'Skecher'];
export const colorData = ['black', 'orange', 'red'];
export const sizeData = ['40', '41', '42', '43', '44', '45'];
export const homeData = [
  {
    id: 0,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '10 min',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 1,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 2,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 3,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 4,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 5,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
];
export const UserData = [
  {
    id: 1,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 2,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 3,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 4,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 5,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 6,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 7,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
  {
    id: 8,
    name: 'John Smith',
    date: '19 Jun 2023',
    time: '12 PM',
  },
];
export const ArrivalData = [
  {
    id: 1,
    name: 'John Smith',
    address: 'Lorem Ipsum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jan 2020',
    locate: 'On the way',
  },
  {
    id: 2,
    name: 'John Smith',
    address: 'Lorem Ipsum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jan 2020',
    locate: 'Arrival at Destination',
  },
  {
    id: 3,
    name: 'John Smith',
    address: 'Lorem Ipsum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jan 2020',
    locate: 'On the way',
  },
  {
    id: 4,
    name: 'John Smith',
    address: 'Lorem Ipsum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jan 2020',
    locate: 'Arrival at Destination',
  },
];
export const BookingDetails = [
  {
    id: 1,
    name: 'Vehicle',
    subtitle: '10 to 12 Ft truck',
  },
  {
    id: 3,
    name: 'Distance',
    subtitle: '(16 KM)',
  },
  {
    id: 4,
    name: 'Date',
    subtitle: '19 Jan 2023',
  },
  {
    id: 5,
    name: 'Time',
    subtitle: '12PM',
  },
  {
    id: 6,
    name: 'Additional Service',
    subtitle: 'Packing',
  },
  {
    id: 7,
    name: 'Payment',
    subtitle: '150.00',
  },
  {
    id: 8,
    name: 'Pickup Location',
    subtitle: 'ipsum dolor sit amet elt sc.:iales',
  },
  {
    id: 9,
    name: 'Drop-off Location',
    subtitle: 'ipsum dolor sit amet elt sc.:iales',
  },
];
export const community = [
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur pretium, augue id finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis ',
    btn: appIcons.popup,
    timming: '1 min ago',
  },
  {
    name: 'Sara Smith',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur pretium, augue id finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis ',
    timming: '1 Day ago',
  },
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur pretium, augue id finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis ',
    timming: '1 Day ago',
  },
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Curabitur pretium, augue id finibus efficitur, nisi risus elementum mi, id ultrices ex leo non felis. Duis ',
    timming: '1 Day ago',
  },
];
export const ChatlistData = [
  {
    id: 1,
    name: 'Mickle',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    name: 'Micsskle',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    name: 'Jimi',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    name: 'Alex',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    name: 'Alex',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 6,
    name: 'Alex',
    message: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 7,
    name: 'Alex',
    message: 'Lorem ipsum dolor sit amet',
  },
];
export const ProfileData = [
  {
    id: 1,
    name: 'Phone Number',
    subtitle: '+ 123-456-7890',
  },
  {
    id: 2,
    name: 'Email Address',
    subtitle: 'James@email.com',
  },
];
export const VehicleData = [
  {
    id: 1,
    img1: appImages.truck1,
    img2: appImages.truck2,
    total: '06',
    km: '50',
    desc: 'Lorem ipsum dolor sit amet conse ctetur',
    capacity: '10 to 12',
  },
  {
    id: 2,
    img1: appImages.truck1,
    img2: appImages.truck2,
    total: '06',
    km: '50',
    desc: 'Lorem ipsum dolor sit amet conse ctetur',
    capacity: '10 to 12',
  },
];
export const VehicleDatas = [
  {
    id: 1,
    img1: appImages.truck1,
    img2: appImages.truck2,
    total: '06',
    km: '50',
    desc: 'Lorem ipsum dolor sit amet conse ctetur',
    capacity: '10 to 12',
  },
  {
    id: 2,
    img1: appImages.truck1,
    img2: appImages.truck2,
    total: '06',
    km: '80',
    desc: 'Lorem ipsum dolor sit amet conse ctetur',
    capacity: '14',
  },
];
export const Day = [
  {
    id: 1,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 2,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 3,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 4,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 5,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 6,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 7,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
];
export const week = [
  {
    id: 1,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 2,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 3,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 4,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
];
export const month = [
  {
    id: 1,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
  {
    id: 2,
    date: '07',
    month: 'June',
    year: '2023',
    cash: '80.00',
  },
];
export const Tipsdata = [
  {
    title: 'Card Details',
    image: appIcons.rightarrow,
    onPress: () => NavService.navigate('CardDetail'),
  },
  {
    title: 'Block Profiles',
    image: appIcons.rightarrow,
    onPress: () => NavService.navigate('UnblockProfile'),
  },
  {
    title: 'Terms and conditions',
    image: appIcons.rightarrow,
    onPress: () => Linking.openURL('https://google.com'),
  },
  {
    title: 'Privacy Policy',
    image: appIcons.rightarrow,
    onPress: () => Linking.openURL('https://google.com'),
  },
];
export const UserProfileData = [
  {
    id: 1,
    name: 'Full Name',
    subtitle: 'John Smith',
  },
  {
    id: 2,
    name: 'Phone Number',
    subtitle: '+ 123-456-7890',
  },
  {
    id: 3,
    name: 'Email Address',
    subtitle: 'James@email.com',
  },
  {
    id: 4,
    name: 'Address',
    subtitle: 'ipsum dolor sit amet elt sc.:iales',
  },
];
export const Reason = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    title: 'Other',
  },
];
export const Blockdata = [
  {
    id: 1,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 2,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 3,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 4,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 5,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 6,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 7,
    title: 'Amelia',
    desc: 'Send you a Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 8,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 9,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 10,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
];

export const ChatListData = [
  {id: '1', text: 'Erika', desc: 'Lorem Ipsum dolor set imet'},
  {id: 2, text: 'Sarena', desc: 'Lorem Ipsum dolor set imet'},
  {id: 3, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},
  {id: 4, text: 'sarena', desc: 'Lorem Ipsum dolor set imet'},
  {id: 5, text: 'Erika', desc: 'Lorem Ipsum dolor set imet'},
  {id: 6, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},
  {id: 7, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},
  {id: 8, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},
  {id: 9, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},
  {id: 10, text: 'Oliva', desc: 'Lorem Ipsum dolor set imet'},

  // Add more items as needed
];
export const ChatData = [
  {
    id: 1,
    name: 'Mickle',
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    image: appImages.profile,
  },
  {
    id: 2,
    name: 'Micsskle',
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ',
    image: appImages.profile,
  },
];

export const bookingtwo = [
  {
    id: 1,
    name: 'John Smith',
    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Move Completed',
  },
  {
    id: 2,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Move Completed',
  },
  {
    id: 3,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Move Completed',
  },
  {
    id: 4,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Move Completed',
  },
  {
    id: 5,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Move Completed',
  },
];
export const bookingone = [
  {
    id: 1,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'On the way',
  },
  {
    id: 2,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Arrival at Destination',
  },
  {
    id: 3,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'On the way',
  },
  {
    id: 4,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'Arrival at Destination',
  },
  {
    id: 5,
    name: 'John Smith',

    address: 'Lorem Ipssum Dolor Sit Amet',
    distance: '3m',
    date: '19 Jun 2023',
    locate: 'On the way',
  },
];
export const OngoingBookingDetail = [
  {
    id: 1,
    name: 'Vehicle',
    subtitle: '10 to 12 Ft truck',
  },
  {
    id: 2,
    name: 'Payment',
    subtitle: '150.00',
  },
  {
    id: 3,
    name: 'Distance',
    subtitle: '(16 KM)',
  },
  {
    id: 4,
    name: 'Date',
    subtitle: '19 Jan 2023',
  },
  {
    id: 5,
    name: 'Time',
    subtitle: '12PM',
  },
  {
    id: 8,
    name: 'Pickup Location',
    subtitle: 'ipsum dolor sit amet elt sc.:iales',
  },
  {
    id: 9,
    name: 'Drop-off Location',
    subtitle: 'ipsum dolor sit amet elt sc.:iales',
  },
];
export const userHomedata = [
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
  {
    name: 'John Smith',
    img: appImages.profile,
  },
];
export const CardDetails = [
  {
    id: 1,
    price: '60.00',
    desc: 'Lorem ipsum dolor smit ampet conse ctetur',
  },
];
export const ProfileDetails = [
  {
    id: 1,
    title: '10 to 12',
    price: '60',
    desc: 'Lorem ipsum dolor smit ampet conse ctetur',
    icn: appIcons.righticon,
  },
  {
    id: 2,
    title: '14',
    price: '60',
    desc: 'Lorem ipsum dolor smit ampet conse ctetur',
  },
];
export const CheckLists = [
  {
    id: 1,
    name: 'Lorem ipsum dolor',
    date: 'Date: 06 Apr, 2023',
    desc: 'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. ut enim adinim veniam, quis',
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor',
    date: 'Date: 06 Apr, 2023',
    desc: 'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. ut enim adinim veniam, quis',
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor',
    date: 'Date: 06 Apr, 2023',
    desc: 'Lorem ipsum dolor sit amet conse ctetur ipisic ing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. ut enim adinim veniam, quis',
  },
];
export const CheckListDetail = [
  {
    id:1,
    name:'Loreum Ipsum dolor',
  },
  {
    id:2,
    name:'Loreum Ipsum dolor',
  },
  {
    id:3,
    name:'Loreum Ipsum dolor',
  },
  {
    id:4,
    name:'Loreum Ipsum dolor',
  },
  {
    id:5,
    name:'Loreum Ipsum dolor',
  },
]
