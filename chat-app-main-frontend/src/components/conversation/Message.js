import React from 'react'
import { Box, Stack } from '@mui/material'
import { Chat_History } from '../../data'
import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg,DocMsg } from './MsgTypes'

const Message = ({menu }) => {
  return (
    <Box p={3}>
    <Stack spacing={3}>
        {Chat_History.map((el) => {
            switch (el.type){
                case "divider":
                    // timeline
                    return <Timeline el={el} menu={menu}/>
                case "msg":
                    switch (el.subtype) {
                        case 'img':
                            // img msg
                            return <MediaMsg el={el} menu={menu}/>
                        case 'doc':
                            // doc msg
                            return <DocMsg el={el} menu={menu}/>
                        case 'link':
                            // link msg
                            return <LinkMsg el={el} menu={menu}/>
                        case 'reply':
                            // reply msg
                            return <ReplyMsg el={el} menu={menu}/>
                        default:
                            // text
                            return <TextMsg el={el} menu={menu}/>
                    }

                    break;
                default:
                    return <></>
                    break;
            }
        })}
    </Stack>

    </Box>
  )
}

export default Message
