import React from 'react'
import HeaderSlider from '../../components/headerSlider/HeaderSlider'
import ItemListComp from './../../components/ItemListComp/ItemListComp';
import ListItemsCard from './../../components/listItemCard/ListItemsCard';
import VerticalItemCard from '../../components/verticalCard/VerticalItemCard';
import HorizontalCardList from '../../components/horizontalCardList/HorizontalCardList';

const Home = () => {
  return (
    <div className=''>
      {/* <HeaderSlider /> */}

      <HorizontalCardList/>
      {/* <ItemListComp title={"Continue Watching for You"} itmes={""} />
      <ListItemsCard title={"Watchlist"} itmes={""} />
      <ItemListComp title={"Latest Releases"} itmes={""} />
      <ListItemsCard title={"ICC Men's T20 World Cup"} itmes={""} />
      <ItemListComp title={"Top 10 in India Today - Hindi"} itmes={""} /> */}
    </div>
  );
}

export default Home