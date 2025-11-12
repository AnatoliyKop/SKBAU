import React from "react";
import {FaInstagram, FaTelegram, FaTiktok} from "react-icons/fa";


const SocialMediaContact: React.FC = () => (
        <div className="card shadow-sm p-3">
            <h5 className="mb-3">Folgen Sie uns</h5>
            <div className="d-flex gap-3">
                <a href="https://www.instagram.com/skbau_service24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><FaInstagram size={70} color={"rgba(23,4,4,0.61)"} /></a>
                <a href="https://www.tiktok.com/@skbauservice24?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"><FaTiktok size={70} color={"rgba(23,4,4,0.61)"} /></a>
                <a href="https://t.me/Kast_07" target="_blank" rel="noreferrer"><FaTelegram size={70} color={"rgba(23,4,4,0.61)"}/></a>
            </div>
        </div>
    );

export default SocialMediaContact;