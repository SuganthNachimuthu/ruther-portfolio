import { Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { siPython, siReact, siJavascript, siMongodb, siExpress, siVite, siGit, siGithub, siVercel, siMui, siHtml5, siCss, siTailwindcss, siSelenium, siCanva, siHeroku, siGooglegemini, siOpenai, siHuggingface, siNodedotjs, siSupabase, siBootstrap, siFigma } from 'simple-icons';

const cloudIcons = [siPython, siReact, siJavascript, siMongodb, siExpress, siVite, siGit, siGithub, siVercel, siMui, siHtml5, siCss, siTailwindcss, siSelenium, siCanva, siHeroku, siGooglegemini, siOpenai, siHuggingface, siNodedotjs, siSupabase, siBootstrap, siFigma];


const IconCloud = () => {

    const icons = [...cloudIcons].map((icon) => {
        return renderSimpleIcon({
            minContrastRatio: 21,
            fallbackHex: '#000',
            icon,
            size: 72,
            aProps: {
                onClick: (e) => e.preventDefault()
            }
        })
    });

    return (<>
        <Cloud options={{
            activeAudio: false,
            outlineMethod: 'none',
            pinchZoom: false,
            wheelZoom: false,
            initial: [0.1, 0.1],
            minSpeed: 0.01,
            clickToFront: 500,
            reverse: true,
        }}
            containerProps={{
                className: 'icon-cloud'
            }}
        >
            {icons}
        </Cloud>
    </>);
};

export default IconCloud;
