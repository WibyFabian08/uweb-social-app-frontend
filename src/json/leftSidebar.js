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
        icon: <PeopleAltIcon fontSize="large" style={{color: 'white'}}></PeopleAltIcon>,
        desc: 'Teman'
    },
    {
        id: 2,
        icon: <VideoLibraryIcon fontSize="large" style={{color: 'white'}}></VideoLibraryIcon>,
        desc: 'Watch'
    },
    {
        id: 3,
        icon: <CalendarTodayIcon fontSize="large" style={{color: 'white'}}></CalendarTodayIcon>,
        desc: 'Acara'
    },
    {
        id: 4,
        icon: <AccessTimeIcon fontSize="large" style={{color: 'white'}}></AccessTimeIcon>,
        desc: 'Kenangan'
    },
    {
        id: 5,
        icon: <BookmarkIcon fontSize="large" style={{color: 'white'}}></BookmarkIcon>,
        desc: 'Tersimpan'
    },
    {
        id: 6,
        icon: <GroupAddTwoToneIcon fontSize="large" style={{color: 'white'}}></GroupAddTwoToneIcon>,
        desc: 'Grup'
    },
    {
        id: 7,
        icon: <StoreTwoToneIcon fontSize="large" style={{color: 'white'}}></StoreTwoToneIcon>,
        desc: 'Marketplace'
    },
]

export default leftSidebar;