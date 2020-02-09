defmodule ReconnectBugDemoWeb.PageController do
  use ReconnectBugDemoWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
