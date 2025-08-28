import type React from "react";
import FollowerLists from "../FollowerLists/FollowerLists";
import { followerData } from "@/data";
import { rightArrow } from "@/app/assets/assets";
import Form from "./Form";
export default function ContactForm() {

    return (
        <div className="flex flex-col lg:flex-row gap-5 w-full items-center lg:items-start justify-center">

            {/* Form Section */}
            <Form />

            {/* Follower List Section */}
            <div className="flex justify-center lg:justify-start">
                <FollowerLists followerData={followerData} rightArrow={rightArrow} />
            </div>

        </div>
    );
}
