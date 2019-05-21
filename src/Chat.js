const zz = [
    {
        id: "gaming",
        type: "gaming",
        cid: "gaming:gaming",
        last_message_at: "2019-05-12T10:03:19.033057Z",
        created_by: {
            id: "quiet-mud-5",
            role: "user",
            created_at: "2019-05-12T09:37:49.776823Z",
            updated_at: "2019-05-12T09:37:49.782841Z",
            last_active: "2019-05-12T09:48:12.90067399Z",
            online: false,
            image: "https://getstream.io/random_svg/?id=quiet-mud-5&name=Quiet+mud",
            name: "Quiet mud"
        },
        frozen: false,
        member_count: 1,
        config: {
            created_at: "2019-05-12T10:38:55.427276Z",
            updated_at: "2019-05-12T10:38:55.454625Z",
            name: "gaming",
            typing_events: true,
            read_events: true,
            connect_events: true,
            search: true,
            reactions: true,
            replies: true,
            mutes: true,
            message_retention: "infinite",
            max_message_length: 280,
            automod: "disabled",
            automod_behavior: "flag",
            commands: [
                {
                    name: "giphy",
                    description: "Post a random gif to the channel",
                    args: "[text]",
                    set: "fun_set"
                },
                {
                    name: "flag",
                    description: "Flag a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "ban",
                    description: "Ban a user",
                    args: "[@username] [text]",
                    set: "moderation_set"
                },
                {
                    name: "unban",
                    description: "Unban a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "mute",
                    description: "Mute a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "unmute",
                    description: "Unmute a user",
                    args: "[@username]",
                    set: "moderation_set"
                }
            ]
        },
        image: "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
        name: "Talk about Go"
    },
    {
        id: "asd",
        type: "livestream",
        cid: "livestream:asd",
        created_by: {
            id: "CLI",
            role: "user",
            created_at: "2019-05-12T10:38:00.283776Z",
            updated_at: "2019-05-12T10:38:00.284589Z",
            online: false,
            name: "Angel Grablev"
        },
        frozen: false,
        config: {
            created_at: "2019-05-11T16:14:05.90915118Z",
            updated_at: "2019-05-11T16:14:05.909151259Z",
            name: "livestream",
            typing_events: false,
            read_events: false,
            connect_events: false,
            search: false,
            reactions: true,
            replies: true,
            mutes: true,
            message_retention: "infinite",
            max_message_length: 280,
            automod: "disabled",
            automod_behavior: "flag",
            commands: [
                {
                    name: "giphy",
                    description: "Post a random gif to the channel",
                    args: "[text]",
                    set: "fun_set"
                },
                {
                    name: "flag",
                    description: "Flag a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "ban",
                    description: "Ban a user",
                    args: "[@username] [text]",
                    set: "moderation_set"
                },
                {
                    name: "unban",
                    description: "Unban a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "mute",
                    description: "Mute a user",
                    args: "[@username]",
                    set: "moderation_set"
                },
                {
                    name: "unmute",
                    description: "Unmute a user",
                    args: "[@username]",
                    set: "moderation_set"
                }
            ]
        },
        image: "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png"
    }
];
import React, { Component } from "react";

import {
    TypingIndicator,
    Chat as ChatWindow,
    ChannelList,
    Channel,
    Attachment,
    ChannelHeader,
    Thread,
    Window
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";

import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";

class MyAttachmentComponent extends React.Component {
    render() {
        const { attachment } = this.props;
        if (attachment.type === "product") {
            return (
                <div className="product" style={{ color: "black" }}>
                    <h2>FC LINK</h2>
                </div>
            );
        } else {
            return (
                <div>
                    testing
                    <Attachment {...this.props} />
                </div>
            );
        }
    }
}

const chatClient = new StreamChat("7t9tn3ub7fjt");
if (localStorage.getItem("user") === "Angel") {
    chatClient.setUser(
        {
            name: "John Doe",
            id: "52ag",
            occupation: "Software Engineer",
            gender: "male"
        },
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTJhZyJ9.tctUSXF037RJtMThIqZ3r0yqptZhnhMOt3le1AHzujs"
    );
} else {
    chatClient.setUser(
        {
            name: "Billy Joe",
            id: "sexy",
            occupation: "Software Engineer",
            gender: "male"
        },
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2V4eSJ9.JFn7Jre1CMF4gDaim_GjigTPYLBbcqMMVLt2jlKZ8aI\n"
    );
}
const attachments = [
    {
        type: "product",
        name: "iPhone",
        url: "https://goo.gl/ppFmcR",
        image: "https://goo.gl/J2gQpi"
    }
];
// chatClient.setUser(
//     {
//         id: "quiet-mud-5",
//         name: "Quiet mud",
//         image: "https://getstream.io/random_svg/?id=quiet-mud-5&name=Quiet+mud"
//     },
//     userToken
// );
// chatClient.user("john-doe").getOrCreate({
//     name: "John Doe",
//     occupation: "Software Engineer",
//     gender: "male"
// });
// chatClient.setUser(
//     {
//         user_id: 52,
//         name: localStorage.getItem("user"),
//         image: "https://getstream.io/random_svg/?name=" + localStorage.getItem("user")
//     },
//     localStorage.getItem("user") === "Angel"
//         ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQW5nZWwifQ.sZkKDM-0RbcLhMSX2qCmN3gsv55SXmsGHgPDU_IW0e8"
//         : ""
// );

export class Chat extends Component {
    constructor(props) {
        super(props);

        this.channel = chatClient.channel("gaming", "gaming");
    }
    async componentWillMount() {}

    render() {
        return (
            <div className={"chat"}>
                <ChatWindow client={chatClient} theme={"messaging light"}>
                    <ChannelList />
                    <Channel
                        noGroupByUser={true}
                        channel={this.channel}
                        title={"Sexies"}
                        TypingIndicator={<div>TYPE</div>}
                        Attachment={MyAttachmentComponent}
                    >
                        <Window>
                            <ChannelHeader />
                            <MessageList
                                TypingIndicator={e => {
                                    console.warn("-- Console JSON", e, this.stateR, this.users);
                                    return <div>TYPE</div>;
                                }}
                            />
                            <MessageInput />
                        </Window>
                        <Thread />
                    </Channel>
                </ChatWindow>
                <button
                    onClick={async () => {
                        channel.sendMessage({
                            text:
                                "Your selected product is out of stock, would you like to select one of these alternatives?",
                            attachments: attachments
                        });
                        // const text = "I’m mowing the air Rand, I’m mowing the air.";
                        // const response = await this.channel.sendMessage({
                        //     text,
                        //     customfield: "123"
                        // });
                    }}
                >
                    AD
                </button>
            </div>
        );
    }
}
