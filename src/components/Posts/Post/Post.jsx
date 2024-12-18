/* eslint-disable react/prop-types */


export default function Post({item}) {


    return (
        <>
            <div className="box-posts px">
                <div className="section-post-left">
                    <div className="post-left">
                        <div className="post-image">
                            <img src={item[0]?.image} alt={item[0]?.title} />
                        </div>
                        <div className="post-content">
                            <h3>{item[0]?.title}</h3>
                            <h4>{item[0]?.subtitle}</h4>
                        </div>

                    </div>
                </div>
                <div className="section-post-right">
                    <div className="section-post-right-top">
                        <div className="post-right-top">
                            <div className="post-image">
                                <img src={item[1]?.image} alt={item[1]?.title} />
                            </div>
                            <div className="post-content">
                                <h4>{item[1]?.title}</h4>
                                <h3>{item[1]?.subtitle}</h3>
                            </div>
                        </div>
                        <div className="post-right-top">
                            <div className="post-image">
                                <img src={item[2]?.image} alt={item[2]?.title} />
                            </div>
                        </div>
                    </div>

                    <div className="section-post-right-bottom">
                        <div className="post-right-bottom">
                            <div className="post-image">
                                <img src={item[3]?.image} alt={item[3]?.title} />
                            </div>
                            <div className="post-content">
                                <h3>{item[3]?.title}</h3>
                                <h4>{item[3]?.subtitle}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
