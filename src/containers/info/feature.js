// @flow

export function chooseFeature (company: string) {
    switch (company) {
        case 'facebook':
            return `
                I am a front-end developer enthusiastic about building practical, comprehendible,
                malleable websites and applications; sharing my passion through teaching; and
                constantly learning.
            `
        case 'google':
            return `
                By day, a full-stack developer, by night, a proud Gopher; building stable,
                functional, scalable APIs and applications; sharing my passion through teaching.
            `
        case 'dell':
        case 'toshiba':
            return ''
        default:
            return `
                I am a full-stack developer enthusiastic about building practical, comprehendible,
                malleable APIs and applications; sharing my passion through teaching; and constantly
                learning.
            `
    }
}