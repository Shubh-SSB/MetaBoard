const share = (title: string, description: string, href: string) => {
    const shareData = {
        title: title,
        text: description,
        url: href,
    };
    if (navigator.canShare(shareData)) {
        navigator.share(shareData);
    }
}

export default share