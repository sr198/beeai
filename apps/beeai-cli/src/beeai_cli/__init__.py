from beeai_cli.async_typer import AsyncTyper
import beeai_cli.commands.tool
import beeai_cli.commands.agent
import beeai_cli.commands.provider

app = AsyncTyper()
app.add_typer(beeai_cli.commands.tool.app, name="tool")
app.add_typer(beeai_cli.commands.agent.app, name="agent")
app.add_typer(beeai_cli.commands.provider.app, name="provider")


@app.command("serve")
async def serve():
    import beeai_server

    beeai_server.serve()


if __name__ == "__main__":
    app()
