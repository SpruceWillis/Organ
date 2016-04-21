class TracksController < ApplicationController

  def create
    @track = Track.create!(track_params)
    render json: @track
  end

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy!
    render json: @track
  end

private

  def track_params
    params.require(:track).permit(:name, :roll)
  end

end
