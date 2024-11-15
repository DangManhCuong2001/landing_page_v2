// 'use client';

// import Image, { StaticImageData } from 'next/image';
// import React, { ReactNode } from 'react';
// import CHATBOT_AVATAR from 'public/img/chtbot3.png';
// import { TeleIcon } from 'src/Constants/icons/incons';

// const aniamation = keyframes({
//     '0%': {
//         transform: 'scale(1)',
//     },
//     '10%, 20%': {
//         transform: 'scale(0.9) rotate(-3deg)',
//     },
//     '30%, 50%, 70%, 90%': {
//         transform: 'scale(1.1) rotate(3deg)',
//     },
//     '40%, 60%, 80%': {
//         transform: 'scale(1.1) rotate(-3deg)',
//     },
//     '100%': {
//         transform: 'scale(1) rotate(0)',
//     },
// });

// const tadaAnimation = `${aniamation} 2s infinite`;

// type Props = {
//     button?: {
//         bgcolor?: string;
//         width?: string;
//         height?: string;
//     };
//     iconButton?: ReactNode;
//     boxChat: {
//         headerBgColor?: string;
//         avatarUrl?: StaticImageData;
//         name: ReactNode;
//         desc: ReactNode;
//     };
//     urlBot: string;
// };

// export default function ChatBotWidget(props: Props) {
//     const { button } = props;
//     const buttonWidth = button?.width || '60px';
//     const buttonHeight = button?.height || '60px';
//     const current = new Date();
//     return (
//         <div
//             style={{
//                 position: 'fixed',
//                 bottom: '75px',
//                 right: '15px',
//                 width: buttonWidth,
//                 height: buttonHeight,
//                 zIndex: 1000,
//                 '& > #toggle-chatbot-widget': {
//                     '& + div': {
//                         transition: '0.2s',
//                         touchAction: 'none',
//                         pointerEvents: 'none',
//                         opacity: 0,
//                         transform: 'translate(0px,100px)',
//                         zIndex: -1,
//                     },
//                     '&:checked': {
//                         '& + div': {
//                             touchAction: 'auto',
//                             pointerEvents: 'all',
//                             opacity: 1,
//                             transform: 'translate(0px,0px)',
//                             zIndex: 1,
//                         },
//                     },
//                 },
//             }}
//         >
//             <label
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     borderRadius: '50%',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     backgroundColor: props.button?.bgcolor || 'primary.main',
//                     cursor: 'pointer',
//                 }}
//                 htmlFor="toggle-chatbot-widget"
//             >
//                 {props.iconButton || <SupportAgent sx={{ fontSize: '28px', animation: tadaAnimation, color: 'white' }} />}
//             </label>
//             <input type="checkbox" name="toggle-chatbot" id="toggle-chatbot-widget" style={{ display: 'none' }} />
//             <div
//                 style={{
//                     // animation: fadeUpAnimation,
//                     width: '360px',
//                     borderRadius: '12px',
//                     overflow: 'hidden',
//                     position: 'absolute',
//                     bottom: '75px',
//                     right: 0,
//                     boxShadow: 'rgba(0, 0, 0, 0.1) 0px 12px 24px 0px',
//                 }}
//             >
//                 <div style={{ backgroundColor: props.boxChat?.headerBgColor || 'primary.main', minHeight: '100px', padding: '24px 20px', display: 'flex', gap: 2 }}>
//                     <Image src={props.boxChat.avatarUrl || CHATBOT_AVATAR} alt="chatbot avatar" style={{ width: '52px', height: '52px', borderRadius: '50%' }} />
//                     <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
//                         <p  style={{fontWeight:600, color: 'white' }}>
//                             {props.boxChat.name}
//                         </p>
//                         <p  style={{ color: 'white',fontWeight:400}}>
//                             {props.boxChat.desc}
//                         </p>
//                     </div>
//                     <label  htmlFor="toggle-chatbot-widget" style={{ cursor: 'pointer' }}>
//                         {/* <Clear sx={{ color: 'white' }} /> */}X
//                     </label>
//                 </div>
//                 <div style={{ padding: '20px 20px 20px 15px', backgroundColor: 'rgb(245, 245, 245)' }}>
//                     <div style={{ padding: '7px 14px', background: 'white', maxWidth: '264px', borderRadius: '9px', position: 'relative', filter: 'drop-shadow(0px 2px 1px #b3b3b3)' }}>
//                         <div style={{ position: 'absolute', top: '12px', left: '-4px', transform: 'rotate(45deg)', background: 'white', width: '16px', height: '16px' }}></div>
//                         <div style={{ position: 'relative' }}>
//                             <p style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: '13px', fontWeight: 700 }}>{props.boxChat.name}</p>
//                             <p style={{ fontSize: '14px', color: 'rgb(17, 17, 17)', marginTop: 1, fontWeight: '600' }}>Hello,</p>
//                             <p style={{ fontSize: '14px', color: 'rgb(17, 17, 17)' }}>
//                                 {"I'm a Telegram bot developed by Orchai team with the purpose of keeping users stay up-to-date & make informed decisions"}
//                             </p>
//                             <p style={{ fontSize: '12px', color: 'rgba(17, 17, 17, 0.5)', textAlign: 'right' }}>
//                                 {current.getHours()}:{current.getMinutes()}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{ padding: '24px 20px', background: 'white' }}>
//                     <button
//                         // startIcon={<TeleIcon />}
//                         style={{ borderRadius: '24px', textTransform: 'none', width:'100%'}}
//                         onClick={() => (window ? window.open(props.urlBot, '_blank') : {})}
//                     >
//                         Ask your question
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
