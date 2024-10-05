import React from 'react';
import Navbar from '../component/Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Moin Meister
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          turpis euismod, elementum libero a, commodo quam. Suspendisse potenti.
          Pellentesque tincidunt accumsan purus, eu lacinia ligula volutpat
          vitae. Aenean auctor dolor nec orci tincidunt, sed sollicitudin ante
          commodo. Nullam dignissim dolor ac nibh rutrum, in efficitur tellus
          pretium. Sed auctor nisl et sem scelerisque, id eleifend metus
          ultrices. Suspendisse potenti. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nam vitae
          lectus non quam facilisis posuere. Etiam rutrum tristique luctus.
        </p>
        <p>
          Vestibulum cursus, neque id aliquam fermentum, nibh turpis interdum
          nisl, a mattis metus enim vitae ante. Suspendisse sodales tempor
          facilisis. Suspendisse vel neque tortor. Sed nulla tellus, feugiat ut
          pellentesque vitae, luctus auctor erat. Duis ac egestas sapien. Ut
          tincidunt, sem at malesuada maximus, nisl nisi feugiat metus, vitae
          malesuada sem arcu vitae est. Fusce dui est, volutpat eu efficitur eu,
          sagittis ac neque. Duis tempus ante quis nulla blandit venenatis.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;