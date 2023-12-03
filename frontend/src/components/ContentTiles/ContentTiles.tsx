import React from "react";
import "./ContentTiles.scss";
import delivery from "@/assets/delivery-contenttile.jpg";
import takeaway from "@/assets/takeaway-contenttile.jpg";
import gifting from "@/assets/gifting-contenttile.jpg";
import yourOrder from "@/assets/your-order-contenttile.jpg";
import Image from "next/image";

const TodoItemsList = () => {
    const contentTileData = [
        { src: delivery, text: "Delivery" },
        { src: takeaway, text: "Takeaway" },
        { src: gifting, text: "Gifting" },
        { src: yourOrder, text: "Your Orders" },
    ];
    const contentTileItems = contentTileData.map((itm, index) => (
        <div key={index} className="col-3 cp">
            <Image src={itm.src} alt="" className="" />
            <p className="relative text-white contentTile-text">{itm.text}</p>
        </div>
    ));
    return (
        <div className="mt-14 px-10">
            <div className="text-4xl text-center">
                What would you like to do?
            </div>
            <div className=" mt-10 row contentTile">{contentTileItems}</div>
        </div>
    );
};

const ContentTiles = () => {
    return (
        <section className="mt-14">
            <div className="container">
                <div className="text-center px-10rem">
                    <h2 className="text-4xl">Marriott Bonvoy on Wheels</h2>
                    <p className="text-center mt-14">
                        Relish the flavours of Marriott in the comfort of your
                        home, as Marriott Bonvoy on Wheels delivers signature
                        delicacies from our award-winning restaurants, right to
                        your doorstep.
                    </p>
                </div>
                <TodoItemsList />
            </div>
        </section>
    );
};

export default ContentTiles;
