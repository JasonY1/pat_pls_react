class MainPagesController < ApplicationController
  def home
    
    @categories = Category.all
    @products = Product.all
  end

  def menu
    @products = Product.all
    @categories = Category.all
  end

  def about
  end

  def connect
  end
end
