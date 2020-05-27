var MatomoTracker = require('matomo-tracker');

// Initialize with your site ID and Matomo URL
export const matomoTracker = new MatomoTracker(1, 'http://jbs-dev-matomo2.informatik.fh-nuernberg.de/matomo2/matomo.php');




interface MatomoMessage {
    action: string
    name: string
    value: string | number
    customDimension?: {
        id: number
        value: string
    }

}


export function logMatomo(message: MatomoMessage): void {
    let payload = {
        e_c: "Atlas",
        e_a: message.action,
        e_n: message.name,
        e_v: message.value,
        url: window.location.href,
    }

    // if (message.customDimension) {
    //     payload.c_var = [message.customDimension.id, message.customDimension.value]
    // }

    matomoTracker.track(
        payload
    )
}



class Matomo {
    private url: string
    private siteID: number

    constructor(url: string, siteID: number) {
        this.url = url
        this.siteID = siteID
    }



    private generateURL(category: string, action: string, customVariables?: Record<string, any>): string {
        const params: {
            [key: string]: number | string | undefined
            idsite: number,
            req: number,
            url: string,
            apiv: number,
            action_name: string,
            _cvar?: string
        } = {
            idsite: this.siteID,
            req: 1,
            url: window.location.href,
            apiv: 1,
            action_name: `${category}${action}`,
        }

        if (customVariables) {
            params._cvar = JSON.stringify(customVariables)
        }
        const encodedParams: string = Object.keys(params).map((key: string) => {
            return key + "=" + params[key]
        }).join("&")

        return `${this.url}?${encodedParams}`
    }


    public trackEvent(category: string, action: string, customVariables?: Record<string, any>): void {
        const url = this.generateURL(category, action, customVariables)
        console.log(url)
        fetch(url, {
            mode: "no-cors"
        })

    }
}


export const matomo = new Matomo("http://jbs-dev-matomo2.informatik.fh-nuernberg.de/matomo2/matomo.php", 1)

