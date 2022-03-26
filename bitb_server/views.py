import configparser
from app import app
from flask.templating import render_template

HOOK_LINK = "/hook"
PHISHING_SETUP = configparser.ConfigParser()
PHISHING_SETUP.read("./phishing.ini")


@app.route("/", methods=["GET"])
def phishing():
    hook_link = HOOK_LINK
    template_static_dir = PHISHING_SETUP.get("phishing", "BITB_TEMPLATE")
    domain_name = PHISHING_SETUP.get("phishing", "DOMAIN_NAME")
    domain_path = PHISHING_SETUP.get("phishing", "DOMAIN_PATH")
    phishing_title = PHISHING_SETUP.get("phishing", "PHISHING_TITLE")
    template = f"phishing/{template_static_dir}/index.html"
    return render_template(
        template,
        phishing_title=phishing_title,
        template_static_dir=template_static_dir,
        hook_link=hook_link,
        domain_name=domain_name,
        domain_path=domain_path,
    )


@app.route(HOOK_LINK, methods=["GET"])
def hook():
    template = f"hook/index.html"
    return render_template(template)


@app.route("/test", methods=["GET"])
def test():
    template = f"test/index.html"
    return render_template(template)
