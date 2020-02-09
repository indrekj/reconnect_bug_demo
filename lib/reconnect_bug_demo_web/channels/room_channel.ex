defmodule ReconnectBugDemoWeb.RoomChannel do
  use Phoenix.Channel

  require Logger

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  def handle_in("activity", _message, socket) do
    Logger.info("Received activity message")

    {:reply, {:ok, %{foo: "bar"}}, socket}
  end
end
