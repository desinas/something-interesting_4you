import React from "react";
import BlogPost from "./../BlogPost";
import "./styles.scss";

function BlogSection(props) {
  return (
    <section className="section has-background-light">
      <div className="container">
        <BlogPost
          title="A Really Interesting Blog Post Title"
          date="July 31, 2018"
          author={{
            name: "Diana Low",
            avatar: "http://i.pravatar.cc/150?img=16",
            url: "https://twitter.com"
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta
            ac eros sed imperdiet. Pellentesque facilisis rutrum laoreet. Donec
            at placerat mi. Cras dolor felis, suscipit et eleifend vel, eleifend
            pulvinar purus. In hac habitasse platea dictumst. Nunc ullamcorper
            commodo justo, eget ullamcorper tortor rutrum vel. Vestibulum eu
            elit a mi tempus malesuada vel sit amet ante.
          </p>
          <p>
            Quisque quis lacus massa. Phasellus ex augue, pretium eu ex vel,
            finibus ultricies urna. Etiam quis purus venenatis, eleifend lacus
            vitae, lobortis dui. Curabitur luctus placerat sollicitudin. Vivamus
            eleifend tincidunt metus a pellentesque. Sed non ipsum non velit
            fringilla mollis vel eu odio. Nam dolor tellus, tincidunt venenatis
            enim quis, consequat egestas nunc. Suspendisse potenti. Nunc in
            tempus elit. Maecenas consequat turpis aliquet, feugiat dui a, porta
            est.
          </p>
          <p>
            Sed accumsan felis sit amet pretium posuere. Nam fermentum consequat
            sem a finibus. Nullam tempus nunc in enim malesuada accumsan. Etiam
            eleifend molestie rutrum. Donec viverra, lectus in iaculis varius,
            nunc nisl bibendum odio, ac maximus purus nibh sed nunc. Etiam
            malesuada mi sem, ut sagittis neque dictum vel. Vestibulum quis
            vulputate ipsum. Nunc porttitor congue massa, congue mattis odio
            sodales ac. Suspendisse potenti. Nulla dictum viverra accumsan.
            Curabitur tristique sem vitae purus tincidunt, sed congue nibh
            auctor. Cras et neque sapien. Nam facilisis dignissim tellus at
            consequat. Sed vel sapien vel dolor consequat sollicitudin. Maecenas
            eget blandit magna.
          </p>
        </BlogPost>
      </div>
    </section>
  );
}

export default BlogSection;
