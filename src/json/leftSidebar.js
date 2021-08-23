import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';
import StoreTwoToneIcon from '@material-ui/icons/StoreTwoTone';

const leftSidebar = [
    {
        id: 1,
        icon: <PeopleAltIcon fontSize="large"></PeopleAltIcon>,
        href: '/users',
        desc: 'User'
    },
    {
        id: 2,
        icon: <VideoLibraryIcon fontSize="large"></VideoLibraryIcon>,
        href: '#',
        desc: 'Watch'
    },
    {
        id: 3,
        icon: <CalendarTodayIcon fontSize="large"></CalendarTodayIcon>,
        href: '#',
        desc: 'Acara'
    },
    {
        id: 4,
        icon: <AccessTimeIcon fontSize="large"></AccessTimeIcon>,
        href: '#',
        desc: 'Kenangan'
    },
    {
        id: 5,
        icon: <BookmarkIcon fontSize="large"></BookmarkIcon>,
        href: '#',
        desc: 'Tersimpan'
    },
    {
        id: 6,
        icon: <GroupAddTwoToneIcon fontSize="large"></GroupAddTwoToneIcon>,
        href: '#',
        desc: 'Grup'
    },
    {
        id: 7,
        icon: <StoreTwoToneIcon fontSize="large"></StoreTwoToneIcon>,
        href: '#',
        desc: 'Marketplace'
    },
]

export default leftSidebar;