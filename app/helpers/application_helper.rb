module ApplicationHelper
  def image_paths_from_folder(folder)
    Dir.glob(Rails.root.join("app/assets/images", folder, "*.{png,jpg,jpeg,gif}")).map do |file|
      asset_path("#{folder}/#{File.basename(file)}")
    end
  end
end
