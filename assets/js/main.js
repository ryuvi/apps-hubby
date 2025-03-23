function getOS() {
    var userAgent = navigator.userAgent;
    var os = null;

    // Verificando o sistema operacional
    if (userAgent.indexOf("Windows NT") !== -1) {
        os = "Windows";
    } else if (userAgent.indexOf("Mac OS X") !== -1) {
        os = "MacOS";
    } else if (userAgent.indexOf("Linux") !== -1) {
        os = "Linux";
    } else if (userAgent.indexOf("Android") !== -1) {
        os = "Android";
    } else if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) {
        os = "iOS";
    }

    return os;
}

function loadSoftwares() {
    let projectsList = document.querySelector('div#projects')

    fetch("/assets/data/softwares.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(dataItem => {
                let container = document.createElement('div')
                container.className = "col-md-4"
                
                let card = document.createElement('div')
                card.className = "card"

                let cardHeader = document.createElement('div')
                cardHeader.className = "card-header"

                let cardBody = document.createElement('div')
                cardBody.className = "card-body"

                let title = document.createElement('h5')
                title.className = "card-title"
                title.innerText = dataItem.title

                let description = document.createElement('p')
                description.className = 'card-text'
                description.innerText = dataItem.description

                let cardFooter = document.createElement('div')
                cardFooter.className = 'card-footer'

                let link = document.createElement('a')
                link.className = 'btn btn-primary btn-download'
                switch (getOS())
                {
                    case "Windows":
                        link.href = dataItem.link.windows
                        link.innerText = "Download Windows"
                        break
                    case "Linux":
                        link.href = dataItem.link.linux
                        link.innerText = "Download Linux"
                        break
                }

                // Cria o cabeçalho do card
                cardHeader.appendChild(title)

                // Cria o corpo do card
                cardBody.appendChild(description)

                // Cria o rodapé do card
                cardFooter.appendChild(link)

                // Cria o card
                card.appendChild(cardHeader)
                card.appendChild(cardBody)
                card.appendChild(cardFooter)

                // Coloca o card no container
                container.appendChild(card)

                // Coloca o container na lista
                projectsList.appendChild(container)
            })
        })
}

window.addEventListener('DOMContentLoaded', loadSoftwares);