import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Projects.css";
import PageCover from "./PageCover";
const Projects = () => {

    return (
        <div className="cover">
            jhjjerkwljfhrjnmvnjjkcmnvhj bjck
            <HTMLFlipBook
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}

                className="demo-book"
            >
                <PageCover>BOOK TITLE</PageCover>
                <div className="demoPage">
                </div>
                <div className="demoPage">Page 2</div>
                <div className="demoPage">Page 3</div>
                <div className="demoPage">Page 4</div>
            </HTMLFlipBook>
        </div>


    )
}

export default Projects;
